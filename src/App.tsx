import { useState, useEffect } from 'react';
import { BookOpen, PanelLeft, PanelRight, Moon, Sun, Coffee } from 'lucide-react';
import { Theme, FontSize } from './types';
import Reader from './components/Reader';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import { studyRepo } from './data';

export default function App() {
  const [theme, setTheme] = useState<Theme>('sepia');
  const [fontSize, setFontSize] = useState<FontSize>('lg');
  const [leftOpen, setLeftOpen] = useState(window.innerWidth > 768);
  const [rightOpen, setRightOpen] = useState(window.innerWidth > 1024);
  
  const study = studyRepo.getStudy('Efesios', 1)!;

  // Apply theme class to body
  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <div className={`flex h-screen w-full overflow-hidden transition-colors duration-300`}>
      {/* LEFT SIDEBAR */}
      <div 
        className={`${leftOpen ? 'w-80 border-r' : 'w-0 border-r-0'} absolute md:relative z-30 h-full flex-shrink-0 transition-all duration-300 ease-in-out panel-bg border-border overflow-hidden shadow-2xl md:shadow-none`}
      >
        <LeftSidebar study={study} onClose={() => setLeftOpen(false)} />
      </div>

      {/* CENTRAL READER */}
      <div className="flex-1 flex flex-col h-full relative overflow-hidden bg-transparent w-full">
        {/* Top Navbar */}
        <header className="h-14 border-b border-border flex items-center justify-between px-4 z-10 sticky top-0 backdrop-blur-md panel-bg bg-opacity-80">
          <div className="flex items-center space-x-2">
            {!leftOpen && (
              <button onClick={() => setLeftOpen(true)} className="p-2 rounded-md hover:bg-hover transition-colors" title="Abrir navegación">
                <PanelLeft className="w-5 h-5 opacity-70" />
              </button>
            )}
            <h1 className="font-sans font-semibold tracking-tight opacity-80 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              BIBLIOTECA BÍBLICA
            </h1>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            <div className="flex bg-muted p-1 rounded-lg">
              <button 
                onClick={() => setTheme('light')} 
                className={`p-1.5 rounded-md transition-colors ${theme === 'light' ? 'bg-panel shadow-sm text-foreground' : 'opacity-60 hover:opacity-100'}`}
                title="Modo Claro"
              >
                <Sun className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setTheme('sepia')} 
                className={`p-1.5 rounded-md transition-colors ${theme === 'sepia' ? 'bg-accent-muted shadow-sm text-accent-foreground' : 'opacity-60 hover:opacity-100'}`}
                title="Modo Sepia"
              >
                <Coffee className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setTheme('dark')} 
                className={`p-1.5 rounded-md transition-colors ${theme === 'dark' ? 'bg-panel shadow-sm text-foreground' : 'opacity-60 hover:opacity-100'}`}
                title="Modo Oscuro"
              >
                <Moon className="w-4 h-4" />
              </button>
            </div>

            <div className="w-px h-6 bg-border" />

            <div className="flex space-x-1">
              <button onClick={() => setFontSize('sm')} className={`p-2 rounded-md hover:bg-hover font-serif ${fontSize === 'sm' ? 'opacity-100' : 'opacity-50'}`}>A</button>
              <button onClick={() => setFontSize('lg')} className={`p-2 text-lg rounded-md hover:bg-hover font-serif ${fontSize === 'lg' ? 'opacity-100' : 'opacity-50'}`}>A</button>
              <button onClick={() => setFontSize('2xl')} className={`p-2 text-xl rounded-md hover:bg-hover font-serif ${fontSize === '2xl' ? 'opacity-100' : 'opacity-50'}`}>A</button>
            </div>

            {!rightOpen && (
              <button onClick={() => setRightOpen(true)} className="p-2 rounded-md hover:bg-hover transition-colors ml-2" title="Abrir herramientas">
                <PanelRight className="w-5 h-5 opacity-70" />
              </button>
            )}
          </div>
        </header>

        {/* Reading Area */}
        <div className="flex-1 overflow-y-auto">
          <Reader study={study} fontSize={fontSize} theme={theme} />
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div 
        className={`${rightOpen ? 'w-80 border-l' : 'w-0 border-l-0'} absolute right-0 md:relative z-30 h-full flex-shrink-0 transition-all duration-300 ease-in-out panel-bg border-border overflow-hidden shadow-2xl md:shadow-none`}
      >
        <RightSidebar study={study} onClose={() => setRightOpen(false)} />
      </div>
    </div>
  );
}
