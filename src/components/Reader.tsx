import { useEffect, useState, Fragment } from 'react';
import { FullStudy, FontSize, Theme } from '../types';
import VerseCard from './VerseCard';
import ReferenceText from './ui/ReferenceText';
import { Clock, BookType, Church, Users, Quote, ScrollText } from 'lucide-react';

interface ReaderProps {
  study: FullStudy;
  fontSize: FontSize;
  theme: Theme;
}

const fontSizeMap = {
  'sm': 'text-sm lg:text-base',
  'base': 'text-base lg:text-lg',
  'lg': 'text-base lg:text-[1.1rem]',
  'xl': 'text-lg lg:text-xl',
  '2xl': 'text-xl lg:text-2xl',
  '3xl': 'text-2xl lg:text-3xl',
};

/** Ornamental divider between major sections */
function SectionDivider() {
  return (
    <div className="section-ornament" aria-hidden="true">
      <span className="section-ornament-symbol">✦</span>
    </div>
  );
}

/** Centered section header with roman numeral + title + accent bar */
function SectionHeader({ roman, title }: { roman: string; title: string }) {
  return (
    <div className="section-header">
      <span className="section-roman">{roman}</span>
      <span className="section-title-line">{title}</span>
      <span className="section-accent-bar" />
    </div>
  );
}

export default function Reader({ study, fontSize, theme }: ReaderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const parent = document.getElementById('reader-container');
      if (parent) {
        const totalHeight = parent.scrollHeight - parent.clientHeight;
        const progress = (parent.scrollTop / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    const container = document.getElementById('reader-container');
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-full" id="reader-container" style={{ overflowY: 'auto' }}>

      {/* Reading Progress Bar */}
      <div className="fixed top-14 left-0 w-full h-0.5 z-20">
        <div
          className="h-full bg-accent transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">

        {/* ── Header ────────────────────────────────────────────── */}
        <div className="mb-16 text-center">
          <div className="flex justify-center items-center space-x-4 mb-6 text-xs font-sans opacity-50">
            <span className="flex items-center gap-1.5 uppercase tracking-widest font-semibold">
              <BookType className="w-3.5 h-3.5" />
              {study.book} {study.chapter}
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {study.estimatedReadingTime} min lectura
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight mb-5 tracking-tight">
            {study.theologicalTitle}
          </h1>

          <h2 className="font-sans text-base md:text-lg opacity-60 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            {study.subtitle}
          </h2>

          <div className="w-full h-60 md:h-96 rounded-2xl overflow-hidden mb-16 relative shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />
            <img
              src={study.coverImage}
              alt={study.theologicalTitle}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ── Passage Study Title ─────────────────────────────────── */}
        <div className="text-center my-20">
          <SectionDivider />
          <p className="font-display text-[0.55rem] tracking-[0.35em] uppercase opacity-40 mt-8 mb-4">
            Estudio del Pasaje
          </p>
          <h2 className="font-display text-3xl md:text-4xl tracking-wide text-accent">
            {study.book} {study.chapter}:{study.verses[0]?.verseNumber || '1'}
            {study.verses.length > 1 ? `–${study.verses[study.verses.length - 1]?.verseNumber}` : ''}
          </h2>
          <p className="font-serif italic text-sm md:text-base opacity-50 mt-4 max-w-lg mx-auto leading-relaxed">
            {study.subtitle}
          </p>
          <div className="mt-10">
            <SectionDivider />
          </div>
        </div>

        {/* ── Content Body ───────────────────────────────────────── */}
        <div className={`font-serif ${fontSizeMap[fontSize]} leading-[1.9]`}>

          {/* I. INTRODUCCIÓN CONTEXTUAL */}
          <section>
            <SectionHeader roman="I" title="Introducción Contextual" />
            <div className="study-prose dropcap">
              <ReferenceText text={study.contextualIntro} refMap={study.refMap} />
            </div>
          </section>

          <SectionDivider />

          {/* II. EXÉGESIS VERSO POR VERSO */}
          <section>
            <SectionHeader roman="II" title="Exégesis Versículo por Versículo" />
            <div className="space-y-4 mt-8">
              {study.verses.map((verse) => (
                <Fragment key={verse.verseNumber}>
                  <VerseCard verse={verse} refMap={study.refMap || {}} />
                </Fragment>
              ))}
            </div>
          </section>

          {/* III. SENTIDO ORIGINAL */}
          {study.originalMeaning && (
            <>
              <SectionDivider />
              <section>
                <SectionHeader roman="III" title="Sentido Original" />
                <div className="study-prose">
                  <ReferenceText text={study.originalMeaning} refMap={study.refMap} />
                </div>
              </section>
            </>
          )}

          {/* IV. APLICACIÓN HERMENÉUTICA ACTUAL */}
          {study.hermeneuticalApplication && study.hermeneuticalApplication.length > 0 && (
            <>
              <SectionDivider />
              <section>
                <SectionHeader roman="IV" title="Aplicación Hermenéutica Actual" />
                <div className="space-y-8 mt-6">
                  {study.hermeneuticalApplication.map((app, i) => (
                    <div key={i} className="hermeneutics-item">
                      <h4 className="font-sans text-sm font-semibold mb-3 opacity-90 tracking-wide">
                        <span className="text-accent-foreground opacity-60 mr-1">{i + 1}.</span> {app.title}
                      </h4>
                      <div className="study-prose text-[0.95em] opacity-85">
                        <ReferenceText text={app.text} refMap={study.refMap} />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

          {/* V. HISTORIA DE LA INTERPRETACIÓN */}
          {study.historyOfInterpretation && (
            <>
              <SectionDivider />
              <section>
                <SectionHeader roman="V" title="Historia de la Interpretación" />

                {study.historyOfInterpretation.fathers && study.historyOfInterpretation.fathers.length > 0 && (
                  <div className="mb-10">
                    <h4 className="font-sans text-xs font-bold tracking-widest opacity-50 mb-5 flex items-center gap-2 uppercase">
                      <Church className="w-3.5 h-3.5 text-accent" />
                      A. Padres de la Iglesia
                    </h4>
                    <div className="space-y-5">
                      {study.historyOfInterpretation.fathers.map((f, i) => (
                        <div key={i} className="interp-block">
                          <p className="interp-author">{f.author}</p>
                          <div className="study-prose text-[0.9em] opacity-85">
                            <ReferenceText text={f.text} refMap={study.refMap} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {study.historyOfInterpretation.reformers && study.historyOfInterpretation.reformers.length > 0 && (
                  <div className="mb-10">
                    <h4 className="font-sans text-xs font-bold tracking-widest opacity-50 mb-5 flex items-center gap-2 uppercase">
                      <ScrollText className="w-3.5 h-3.5 text-accent" />
                      B. Los Reformadores
                    </h4>
                    <div className="space-y-5">
                      {study.historyOfInterpretation.reformers.map((r, i) => (
                        <div key={i} className="interp-block">
                          <p className="interp-author">{r.author}</p>
                          <div className="study-prose text-[0.9em] opacity-85">
                            <ReferenceText text={r.text} refMap={study.refMap} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {study.historyOfInterpretation.contemporary && study.historyOfInterpretation.contemporary.length > 0 && (
                  <div>
                    <h4 className="font-sans text-xs font-bold tracking-widest opacity-50 mb-5 flex items-center gap-2 uppercase">
                      <Quote className="w-3.5 h-3.5 text-accent" />
                      C. Teología Contemporánea
                    </h4>
                    <div className="space-y-5">
                      {study.historyOfInterpretation.contemporary.map((c, i) => (
                        <div key={i} className="interp-block">
                          <p className="interp-author">{c.author}</p>
                          <div className="study-prose text-[0.9em] opacity-85">
                            <ReferenceText text={c.text} refMap={study.refMap} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </section>
            </>
          )}

          {/* VI. REFLEXIÓN PASTORAL */}
          <>
            <SectionDivider />
            <section>
              <SectionHeader roman="VI" title="Reflexión Pastoral" />
              <div className="pastoral-block mt-6">
                <div className="study-prose text-[0.97em] italic">
                  <ReferenceText text={study.pastoralReflection} refMap={study.refMap} />
                </div>
              </div>
            </section>
          </>

        </div>

        {/* Bottom padding */}
        <div className="h-32" />
      </div>
    </div>
  );
}
