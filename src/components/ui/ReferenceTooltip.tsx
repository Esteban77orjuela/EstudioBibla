import { useState, useRef, useEffect } from 'react';
import type { Source } from '../../types';

interface ReferenceTooltipProps {
  number: number;
  source: Source;
  location?: string;
}

export default function ReferenceTooltip({ number, source, location }: ReferenceTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<'above' | 'below'>('below');
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isVisible && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setPosition(spaceBelow < 200 ? 'above' : 'below');
    }
  }, [isVisible]);

  return (
    <span
      ref={ref}
      className="relative inline-flex items-center"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <sup
        className="cursor-pointer text-accent hover:text-accent-foreground font-sans font-bold text-xs mx-0.5 select-none transition-colors"
      >
        [{number}]
      </sup>
      {isVisible && (
        <span
          className={`
            absolute z-50 w-72 p-3 rounded-lg shadow-xl text-sm
            bg-panel border border-border
            ${position === 'above' ? 'bottom-full mb-2' : 'top-full mt-2'}
            left-1/2 -translate-x-1/2
          `}
        >
          <span className="font-sans font-semibold text-xs tracking-widest opacity-50 block mb-1">
            REFERENCIA [{number}]
          </span>
          <span className="font-sans font-medium block">{source.author}</span>
          <span className="font-serif italic text-xs opacity-80 block">
            {source.title}{source.subtitle ? `, ${source.subtitle}` : ''}
          </span>
          {location && (
            <span className="font-sans text-xs opacity-60 block mt-1">{location}</span>
          )}
          {source.year && (
            <span className="font-sans text-xs opacity-60 block">{source.year}</span>
          )}
        </span>
      )}
    </span>
  );
}
