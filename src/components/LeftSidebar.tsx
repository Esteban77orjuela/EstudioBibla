import { useState, useEffect } from 'react';
import { PanelLeftClose, ChevronDown, ChevronRight, Book, Bookmark, Compass } from 'lucide-react';
import { FullStudy } from '../types';
import { studyRepo } from '../data';

interface LeftSidebarProps {
  study: FullStudy | null;
  currentBook: string;
  currentChapter: number;
  onNavigate: (book: string, chapter: number) => void;
  onClose: () => void;
}

export default function LeftSidebar({ study, currentBook, currentChapter, onNavigate, onClose }: LeftSidebarProps) {
  const books = studyRepo.getAllBooks();
  const [openBooks, setOpenBooks] = useState<string[]>([currentBook]);

  useEffect(() => {
    if (!openBooks.includes(currentBook)) {
      setOpenBooks(prev => [...prev, currentBook]);
    }
  }, [currentBook]);

  const toggleBook = (book: string) => {
    setOpenBooks(prev =>
      prev.includes(book) ? prev.filter(b => b !== book) : [...prev, book]
    );
  };

  return (
    <div className="w-80 h-full flex flex-col font-sans">
      <div className="h-14 flex items-center justify-between px-4 border-b border-border flex-shrink-0">
        <span className="font-sans font-medium text-sm tracking-wide opacity-70">NAVEGACIÓN</span>
        <button onClick={onClose} className="p-1.5 rounded-md hover:bg-hover opacity-70 hover:opacity-100">
          <PanelLeftClose className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="space-y-1">
          <button className="w-full flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-hover text-sm font-medium opacity-80 hover:opacity-100">
            <Compass className="w-4 h-4" />
            <span>Explorar</span>
          </button>
          <button className="w-full flex items-center space-x-3 px-2 py-2 rounded-md hover:bg-hover text-sm font-medium opacity-80 hover:opacity-100">
            <Bookmark className="w-4 h-4" />
            <span>Marcadores</span>
          </button>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-widest opacity-50 mb-3 px-2">
            {books.find(b => b.name === currentBook)?.testament === 'ot' ? 'ANTIGUO TESTAMENTO' : 'NUEVO TESTAMENTO'}
          </h3>
          <div className="space-y-1">
            {books.map(book => {
              const isOpen = openBooks.includes(book.name);
              const isActiveBook = book.name === currentBook;

              return (
                <div key={book.name}>
                  <button
                    onClick={() => toggleBook(book.name)}
                    className={`w-full flex items-center justify-between px-2 py-1.5 rounded-md hover:bg-hover transition-colors ${isActiveBook ? 'font-medium' : 'opacity-80 hover:opacity-100'}`}
                  >
                    <div className="flex items-center space-x-2">
                      <Book className="w-3.5 h-3.5 opacity-60" />
                      <span className="text-sm">{book.name}</span>
                    </div>
                    {isOpen ? <ChevronDown className="w-3.5 h-3.5 opacity-50" /> : <ChevronRight className="w-3.5 h-3.5 opacity-50" />}
                  </button>

                  {isOpen && (
                    <div className="ml-6 mt-1 mb-2 grid grid-cols-5 gap-1">
                      {Array.from({ length: book.chapters }).map((_, i) => {
                        const chapterNum = i + 1;
                        const isActiveChapter = currentBook === book.name && chapterNum === currentChapter;

                        return (
                          <button
                            key={chapterNum}
                            onClick={() => onNavigate(book.name, chapterNum)}
                            className={`
                              aspect-square flex items-center justify-center rounded-md text-sm transition-colors
                              ${isActiveChapter
                                ? 'bg-accent-muted text-accent-foreground font-medium shadow-sm'
                                : 'hover:bg-hover opacity-70 hover:opacity-100'
                              }
                            `}
                          >
                            {chapterNum}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
