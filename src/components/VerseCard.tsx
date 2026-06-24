import { useState, Fragment } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, BookOpen, Quote, Globe, MessageSquare, AlignLeft, Library } from 'lucide-react';
import { VerseStudy, Theme } from '../types';
import ReferenceTooltip from './ui/ReferenceTooltip';
import ReferenceModal from './ui/ReferenceModal';
import { studyRepo } from '../data';

interface VerseCardProps {
  verse: VerseStudy;
  theme: Theme;
}

export default function VerseCard({ verse, theme }: VerseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showReferences, setShowReferences] = useState(false);

  const citations = verse.citations ?? [];

  return (
    <>
      <div className={`mb-6 rounded-xl overflow-hidden transition-all duration-300 border ${isExpanded ? 'shadow-md border-border panel-bg' : 'border-transparent hover:border-border'}`}>
        
        {/* Verse Header */}
        <div 
          className="px-6 py-4 cursor-pointer flex gap-4 items-start group hover:bg-hover transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="font-sans font-bold text-lg text-accent select-none mt-1">
            {verse.verseNumber}
          </span>
          <p className="flex-1 font-serif text-[1.1em] leading-relaxed">
            {verse.text}
            {citations.length > 0 && (
              <span className="inline-flex items-baseline gap-0.5 ml-1">
                {citations.map((cit, idx) => {
                  const src = studyRepo.getSourceById(cit.sourceId);
                  if (!src) return null;
                  return (
                    <Fragment key={`ref-${cit.number}-${idx}`}>
                      <ReferenceTooltip
                        number={cit.number}
                        source={src}
                        location={cit.location}
                      />
                    </Fragment>
                  );
                })}
              </span>
            )}
          </p>
          <button className="opacity-0 group-hover:opacity-50 transition-opacity p-1">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>

        {/* Exegesis Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 pt-2 border-t border-border space-y-6">
                
                {/* Original Languages */}
                {verse.originalText && verse.originalText.length > 0 && (
                  <div>
                    <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest opacity-50 mb-3 font-sans">
                      <Globe className="w-3.5 h-3.5" />
                      TEXTO ORIGINAL
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {verse.originalText.map((word, i) => (
                        <div key={i} className="bg-muted rounded-lg p-3 flex-1 min-w-[200px]">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-serif text-lg font-medium">{word.word}</span>
                            <span className="font-mono text-xs opacity-50">{word.strongs}</span>
                          </div>
                          <div className="font-sans text-xs opacity-70 mb-2 italic">{word.transliteration}</div>
                          <p className="font-sans text-sm leading-relaxed">{word.meaning}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Analysis Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {verse.lexicalAnalysis && (
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest opacity-50 mb-2 font-sans">
                        <AlignLeft className="w-3.5 h-3.5" />
                        ANÁLISIS LÉXICO
                      </h4>
                      <p className="font-sans text-sm leading-relaxed opacity-90">{verse.lexicalAnalysis}</p>
                    </div>
                  )}
                  
                  {verse.theologicalMeaning && (
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest opacity-50 mb-2 font-sans">
                        <BookOpen className="w-3.5 h-3.5" />
                        SIGNIFICADO TEOLÓGICO
                      </h4>
                      <p className="font-sans text-sm leading-relaxed opacity-90">{verse.theologicalMeaning}</p>
                    </div>
                  )}
                </div>

                {/* Pastoral & Cultural */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {verse.culturalContext && (
                    <div>
                      <h4 className="text-xs font-bold tracking-widest opacity-50 mb-2 font-sans">CONTEXTO CULTURAL</h4>
                      <p className="font-sans text-sm leading-relaxed opacity-90">{verse.culturalContext}</p>
                    </div>
                  )}
                  
                  {verse.pastoralApplication && (
                    <div>
                      <h4 className="flex items-center gap-2 text-xs font-bold tracking-widest opacity-50 mb-2 font-sans text-accent">
                        <MessageSquare className="w-3.5 h-3.5" />
                        APLICACIÓN PASTORAL
                      </h4>
                      <p className="font-sans text-sm leading-relaxed opacity-90">{verse.pastoralApplication}</p>
                    </div>
                  )}
                </div>

                {/* Quotes */}
                {verse.quotes && verse.quotes.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold tracking-widest opacity-50 mb-3 font-sans">COMENTARISTAS</h4>
                    <div className="space-y-3">
                      {verse.quotes.map((quote, i) => (
                        <div key={i} className="pl-4 border-l-2 border-border">
                          <p className="font-serif italic text-[0.95em] leading-relaxed mb-1 opacity-90 flex gap-2">
                            <Quote className="w-3 h-3 flex-shrink-0 mt-1.5 opacity-40" />
                            {quote.text}
                          </p>
                          <p className="font-sans text-xs opacity-60 ml-5">— {quote.author}, <span className="italic">{quote.source}</span></p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* References Footer */}
                {citations.length > 0 && (
                  <div className="pt-4 border-t border-border">
                    <button
                      onClick={() => setShowReferences(true)}
                      className="flex items-center gap-2 font-sans text-xs font-medium text-accent hover:text-accent-foreground transition-colors"
                    >
                      <Library className="w-3.5 h-3.5" />
                      VER FUENTES ({citations.length})
                    </button>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                      {citations.map((cit) => {
                        const source = studyRepo.getSourceById(cit.sourceId);
                        return (
                          <span key={cit.number} className="font-sans text-xs opacity-50">
                            [{cit.number}] {source?.author ?? 'Fuente desconocida'}
                            {source?.year ? ` (${source.year})` : ''}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Reference Modal */}
      <ReferenceModal
        isOpen={showReferences}
        onClose={() => setShowReferences(false)}
        citations={citations}
        getSource={(id) => studyRepo.getSourceById(id)}
      />
    </>
  );
}
