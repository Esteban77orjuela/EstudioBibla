import type { FullStudy, Source } from '../types';
import { EPHESIANS_1_STUDY } from './studies/ephesians-1';
import { SOURCES } from './sources';

class StudyRepository {
  private studies: Map<string, FullStudy> = new Map();

  constructor() {
    this.registerStudy(EPHESIANS_1_STUDY);
  }

  private registerStudy(study: FullStudy): void {
    const key = this.studyKey(study.book, study.chapter);
    this.studies.set(key, study);
  }

  private studyKey(book: string, chapter: number): string {
    return `${book.toLowerCase()}-${chapter}`;
  }

  getStudy(book: string, chapter: number): FullStudy | null {
    const key = this.studyKey(book, chapter);
    return this.studies.get(key) ?? null;
  }

  getAllStudies(): FullStudy[] {
    return Array.from(this.studies.values());
  }

  getSourceById(id: string): Source | null {
    return SOURCES[id] ?? null;
  }

  getAllSources(): Source[] {
    return Object.values(SOURCES);
  }

  getAllBooks(): { name: string; chapters: number; testament: 'ot' | 'nt' }[] {
    return [
      { name: 'Gálatas', chapters: 6, testament: 'nt' },
      { name: 'Efesios', chapters: 6, testament: 'nt' },
      { name: 'Filipenses', chapters: 4, testament: 'nt' },
      { name: 'Colosenses', chapters: 4, testament: 'nt' },
    ];
  }

  searchStudies(query: string): FullStudy[] {
    const q = query.toLowerCase();
    return this.getAllStudies().filter(study =>
      study.book.toLowerCase().includes(q) ||
      study.theologicalTitle.toLowerCase().includes(q) ||
      study.subtitle.toLowerCase().includes(q) ||
      study.verses.some(v => v.text.toLowerCase().includes(q))
    );
  }
}

export const studyRepo = new StudyRepository();
