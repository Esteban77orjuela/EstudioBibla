import React, { useState } from 'react';
import { PanelRightClose, Sparkles, NotebookPen, Library, Search } from 'lucide-react';
import { FullStudy } from '../types';

export default function RightSidebar({ study, onClose }: { study: FullStudy, onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'ai' | 'notes' | 'biblio'>('ai');

  return (
    <div className="w-80 h-full flex flex-col font-sans">
      <div className="h-14 flex items-center justify-between px-4 border-b border-border flex-shrink-0">
        <button onClick={onClose} className="p-1.5 rounded-md hover:bg-hover opacity-70 hover:opacity-100">
          <PanelRightClose className="w-4 h-4" />
        </button>
        <span className="font-sans font-medium text-sm tracking-wide opacity-70">HERRAMIENTAS</span>
      </div>

      <div className="flex border-b border-border">
        <button 
          onClick={() => setActiveTab('ai')}
          className={`flex-1 py-3 text-xs font-medium flex justify-center items-center gap-1.5 border-b-2 transition-colors ${activeTab === 'ai' ? 'border-accent text-accent' : 'border-transparent opacity-50 hover:opacity-100'}`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          ASISTENTE AI
        </button>
        <button 
          onClick={() => setActiveTab('notes')}
          className={`flex-1 py-3 text-xs font-medium flex justify-center items-center gap-1.5 border-b-2 transition-colors ${activeTab === 'notes' ? 'border-current opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
        >
          <NotebookPen className="w-3.5 h-3.5" />
          NOTAS
        </button>
        <button 
          onClick={() => setActiveTab('biblio')}
          className={`flex-1 py-3 text-xs font-medium flex justify-center items-center gap-1.5 border-b-2 transition-colors ${activeTab === 'biblio' ? 'border-current opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
        >
          <Library className="w-3.5 h-3.5" />
          FUENTES
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'ai' && (
          <div className="h-full flex flex-col">
            <div className="flex-1 space-y-4">
              <div className="bg-accent-muted text-accent-foreground p-3 rounded-lg text-sm leading-relaxed">
                <p>Soy tu asistente teológico. Solo respondo usando las fuentes bibliográficas de la plataforma.</p>
                <p className="mt-2 text-xs opacity-70">Ej. "¿Qué significa la palabra 'santos' en el contexto original de Éfeso?"</p>
              </div>
            </div>
            <div className="relative mt-4">
              <input 
                type="text" 
                placeholder="Pregunta a la biblioteca..." 
                className="w-full bg-muted border border-border rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-accent text-white hover:opacity-90 transition-opacity">
                <Search className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="text-center mt-10 opacity-50">
            <NotebookPen className="w-8 h-8 mx-auto mb-3 opacity-50" />
            <p className="text-sm">No tienes notas para este capítulo.</p>
          </div>
        )}

        {activeTab === 'biblio' && (
          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-widest opacity-50 mb-3">BIBLIOGRAFÍA DEL ESTUDIO</h3>
            <ul className="space-y-3">
              {study.bibliography.map((item, i) => (
                <li key={i} className="text-sm opacity-80 leading-relaxed pl-3 border-l-2 border-border">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
