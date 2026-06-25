import { useState, useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import type { Source } from '../../types';

interface ReferenceTooltipProps {
  number: number;
  source: Source;
  location?: string;
}

export default function ReferenceTooltip({ number, source, location }: ReferenceTooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<'above' | 'below'>('below');
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isVisible && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setPosition(spaceBelow < 200 ? 'above' : 'below');
    }
  }, [isVisible]);

  return (
    <a
      ref={ref}
      href={source.url || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-flex items-center no-underline"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      title={source.url ? `Abrir: ${source.url}` : 'Fuente sin URL'}
    >
      <sup
        className="cursor-pointer text-accent hover:text-accent-foreground font-sans font-bold text-xs mx-0.5 select-none transition-colors"
      >
        [{number}]
      </sup>
      <ExternalLink className="w-2 h-2 opacity-40 hover:opacity-100 transition-opacity ml-0.5" />

      {isVisible && (
        <span
          className={`
            absolute z-50 w-72 p-3 rounded-lg shadow-xl text-sm pointer-events-none
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
          {source.url && (
            <span className="font-sans text-xs opacity-50 block mt-2 truncate">{source.url}</span>
          )}
        </span>
      )}
    </a>
  );
}
