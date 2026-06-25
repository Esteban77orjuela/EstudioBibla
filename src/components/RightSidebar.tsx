import React, { useState } from 'react';
import { PanelRightClose, Sparkles, NotebookPen, Library, Search } from 'lucide-react';
import { FullStudy } from '../types';

export default function RightSidebar({ study, onClose }: { study: FullStudy, onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'ai' | 'notes' | 'biblio'>('ai');

  return (
    <div className="w-80 h-full flex flex-col font-sans">
      {/* Header */}
      <div className="h-14 flex items-center justify-between px-4 border-b border-border flex-shrink-0">
        <button onClick={onClose} className="p-1.5 rounded-md hover:bg-hover opacity-70 hover:opacity-100 transition-colors">
          <PanelRightClose className="w-4 h-4" />
        </button>
        <span className="font-sans font-medium text-xs tracking-widest opacity-60 uppercase">Herramientas</span>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        <button
          onClick={() => setActiveTab('ai')}
          className={`flex-1 py-3 text-xs font-semibold flex justify-center items-center gap-1.5 border-b-2 transition-all ${
            activeTab === 'ai'
              ? 'border-[#7C6FF7] text-[#7C6FF7] opacity-100'
              : 'border-transparent opacity-40 hover:opacity-70'
          }`}
          title="Asistente IA"
        >
          <Sparkles className="w-3.5 h-3.5" style={activeTab === 'ai' ? { color: '#7C6FF7' } : {}} />
          <span>Asistente</span>
        </button>
        <button
          onClick={() => setActiveTab('notes')}
          className={`flex-1 py-3 text-xs font-semibold flex justify-center items-center gap-1.5 border-b-2 transition-all ${
            activeTab === 'notes'
              ? 'border-[#4BAD7F] text-[#4BAD7F] opacity-100'
              : 'border-transparent opacity-40 hover:opacity-70'
          }`}
          title="Mis Notas"
        >
          <NotebookPen className="w-3.5 h-3.5" style={activeTab === 'notes' ? { color: '#4BAD7F' } : {}} />
          <span>Notas</span>
        </button>
        <button
          onClick={() => setActiveTab('biblio')}
          className={`flex-1 py-3 text-xs font-semibold flex justify-center items-center gap-1.5 border-b-2 transition-all ${
            activeTab === 'biblio'
              ? 'border-accent text-accent-foreground opacity-100'
              : 'border-transparent opacity-40 hover:opacity-70'
          }`}
          title="Bibliografía"
        >
          <Library className="w-3.5 h-3.5" style={activeTab === 'biblio' ? { color: 'var(--accent-fg)' } : {}} />
          <span>Fuentes</span>
        </button>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto p-4">

        {/* ── Asistente IA ── */}
        {activeTab === 'ai' && (
          <div className="h-full flex flex-col">
            <div className="flex-1 space-y-4">
              {/* AI welcome bubble */}
              <div className="rounded-xl p-4 text-sm leading-relaxed" style={{ background: 'var(--accent-muted)', borderLeft: '3px solid #7C6FF7' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#7C6FF7' }} />
                  <span className="font-sans font-semibold text-xs tracking-wide uppercase opacity-70">Asistente Teológico</span>
                </div>
                <p className="opacity-85">Solo respondo usando las fuentes bibliográficas de la plataforma.</p>
                <p className="mt-2 text-xs opacity-55 italic">Ej. "¿Qué significa la palabra 'santos' en el contexto original de Éfeso?"</p>
              </div>
            </div>
            {/* Input */}
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Pregunta a la biblioteca..."
                className="w-full bg-muted border border-border rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C6FF7] focus:border-transparent transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full text-white hover:opacity-90 transition-opacity" style={{ background: '#7C6FF7' }}>
                <Search className="w-3 h-3" />
              </button>
            </div>
          </div>
        )}

        {/* ── Notas ── */}
        {activeTab === 'notes' && (
          <div className="text-center mt-12 opacity-40">
            <NotebookPen className="w-9 h-9 mx-auto mb-3" style={{ color: '#4BAD7F' }} />
            <p className="text-sm font-sans">Sin notas para este capítulo.</p>
            <p className="text-xs mt-1 opacity-70">Selecciona texto para añadir una nota.</p>
          </div>
        )}

        {/* ── Fuentes / Bibliografía ── */}
        {activeTab === 'biblio' && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-4">
              <Library className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--accent-fg)' }} />
              <h3 className="text-xs font-bold tracking-widest uppercase opacity-60">Bibliografía</h3>
            </div>
            <ul className="space-y-2">
              {study.bibliography.map((item, i) => (
                item ? (
                  <li key={i} className="biblio-item font-sans">
                    {item}
                  </li>
                ) : (
                  <li key={i} className="h-px bg-border my-3" />
                )
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
