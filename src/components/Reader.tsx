import { useEffect, useState, Fragment } from 'react';
import { FullStudy, FontSize, Theme } from '../types';
import VerseCard from './VerseCard';
import { Clock, BookType } from 'lucide-react';

interface ReaderProps {
  study: FullStudy;
  fontSize: FontSize;
  theme: Theme;
}

const fontSizeMap = {
  'sm': 'text-sm lg:text-base',
  'base': 'text-base lg:text-lg',
  'lg': 'text-lg lg:text-xl',
  'xl': 'text-xl lg:text-2xl',
  '2xl': 'text-2xl lg:text-3xl',
  '3xl': 'text-3xl lg:text-4xl',
};

export default function Reader({ study, fontSize, theme }: ReaderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update progress bar on scroll
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
      <div className="fixed top-14 left-0 w-full h-1 z-20">
        <div 
          className="h-full bg-accent transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="flex justify-center items-center space-x-4 mb-6 text-sm font-sans opacity-60">
            <span className="flex items-center gap-1.5 uppercase tracking-widest font-semibold">
              <BookType className="w-4 h-4" />
              {study.book} {study.chapter}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {study.estimatedReadingTime} min lectura
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 tracking-tight">
            {study.theologicalTitle}
          </h1>
          
          <h2 className="font-sans text-xl md:text-2xl opacity-70 font-light mb-12">
            {study.subtitle}
          </h2>

          <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-16 relative">
            <div className="absolute inset-0 bg-black/20 z-10" />
            <img 
              src={study.coverImage} 
              alt={study.theologicalTitle} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Body */}
        <div className={`font-serif ${fontSizeMap[fontSize]} space-y-12 leading-relaxed`}>
          
          <section>
            <h3 className="font-sans text-xs font-bold tracking-widest opacity-50 mb-4 uppercase">Introducción Contextual</h3>
            <p className="dropcap">{study.contextualIntro}</p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-border">
            <section>
              <h3 className="font-sans text-xs font-bold tracking-widest opacity-50 mb-3 uppercase">Contexto Histórico</h3>
              <p className="text-[0.85em] opacity-90">{study.historicalContext}</p>
            </section>
            <section>
              <h3 className="font-sans text-xs font-bold tracking-widest opacity-50 mb-3 uppercase">Contexto Literario</h3>
              <p className="text-[0.85em] opacity-90">{study.literaryContext}</p>
            </section>
          </div>

          {/* Verses Exegesis Section */}
          <section className="pt-8">
            <h3 className="font-sans text-sm font-bold tracking-widest opacity-50 mb-8 uppercase text-center">
              Exégesis Versículo por Versículo
            </h3>
            
            <div className="space-y-4">
              {study.verses.map((verse) => (
                <Fragment key={verse.verseNumber}>
                  <VerseCard verse={verse} theme={theme} />
                </Fragment>
              ))}
            </div>
          </section>

          {/* Conclusion Sections */}
          <section className="pt-12">
            <h3 className="font-sans text-xs font-bold tracking-widest opacity-50 mb-4 uppercase">Línea Redentiva</h3>
            <p>{study.redemptiveLine}</p>
          </section>

          <section className="bg-muted p-8 rounded-2xl my-12">
            <h3 className="font-sans text-xs font-bold tracking-widest opacity-50 mb-4 uppercase">Reflexión Pastoral</h3>
            <p className="italic opacity-90">{study.pastoralReflection}</p>
          </section>

        </div>
        
        {/* Bottom padding for scrolling comfort */}
        <div className="h-32"></div>
      </div>
    </div>
  );
}
