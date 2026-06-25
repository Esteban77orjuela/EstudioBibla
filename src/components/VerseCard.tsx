import { BookOpen } from 'lucide-react';
import { VerseStudy } from '../types';
import ReferenceText from './ui/ReferenceText';

interface VerseCardProps {
  verse: VerseStudy;
  refMap: Record<number, string>;
}

export default function VerseCard({ verse, refMap }: VerseCardProps) {
  return (
    <div className="mb-6 rounded-xl border border-border overflow-hidden transition-shadow hover:shadow-md" style={{ background: 'var(--panel-bg)' }}>
      {/* Top accent line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(to right, var(--accent-color), transparent)' }} />
      <div className="px-6 py-5">
        <div className="flex gap-4">
          {/* Verse number badge */}
          <div className="flex flex-col items-center gap-2">
            <span className="verse-number-badge">
              {verse.verseNumber}
            </span>
            {/* Thin connector line */}
            <div className="flex-1 w-px" style={{ background: 'var(--panel-border)', minHeight: '1rem' }} />
          </div>
          {/* Verse content */}
          <div className="flex-1 min-w-0 font-serif study-prose text-[1.02em] leading-[1.85] pb-1">
            <ReferenceText text={verse.text} refMap={refMap} />
          </div>
        </div>
      </div>
    </div>
  );
}
