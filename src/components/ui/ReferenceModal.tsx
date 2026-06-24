import { useState } from 'react';
import { X, ExternalLink, BookOpen } from 'lucide-react';
import type { Source, Citation } from '../../types';

interface ReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  citations: Citation[];
  getSource: (id: string) => Source | null;
}

export default function ReferenceModal({ isOpen, onClose, citations, getSource }: ReferenceModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-panel border border-border rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-y-auto mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="font-sans font-semibold text-sm tracking-wide flex items-center gap-2">
            <BookOpen className="w-4 h-4 opacity-70" />
            REFERENCIAS
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-md hover:bg-hover transition-colors opacity-60 hover:opacity-100"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {citations.map((citation) => {
            const source = getSource(citation.sourceId);
            if (!source) return null;

            return (
              <div key={citation.number} className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-muted text-accent-foreground flex items-center justify-center font-sans font-bold text-sm">
                  {citation.number}
                </span>
                <div className="flex-1 space-y-1">
                  <p className="font-sans font-medium">{source.author}</p>
                  <p className="font-serif italic text-sm opacity-80">
                    {source.title}
                    {source.subtitle ? <span className="not-italic">, {source.subtitle}</span> : ''}
                  </p>
                  {citation.location && (
                    <p className="font-sans text-xs opacity-60">{citation.location}</p>
                  )}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {source.publisher && (
                      <span className="font-sans text-xs bg-muted px-2 py-1 rounded opacity-70">
                        {source.publisher}
                      </span>
                    )}
                    {source.year && (
                      <span className="font-sans text-xs bg-muted px-2 py-1 rounded opacity-70">
                        {source.year}
                      </span>
                    )}
                    <span className="font-sans text-xs bg-muted px-2 py-1 rounded opacity-70 uppercase">
                      {source.type}
                    </span>
                  </div>
                  {source.url && (
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-sans text-xs text-accent hover:text-accent-foreground mt-2 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Ver fuente original
                    </a>
                  )}
                  {citation.quote && (
                    <div className="mt-3 pl-3 border-l-2 border-border">
                      <p className="font-serif italic text-sm opacity-80">&ldquo;{citation.quote}&rdquo;</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
