import type { Citation } from './reference';

export type Theme = 'light' | 'dark' | 'sepia';
export type FontSize = 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';

export interface OriginalWord {
  word: string;
  transliteration: string;
  strongs: string;
  meaning: string;
}

export interface VerseStudy {
  verseNumber: number;
  text: string;
  originalText?: OriginalWord[];
  lexicalAnalysis?: string;
  culturalContext?: string;
  crossReferences?: { reference: string; text: string }[];
  theologicalMeaning?: string;
  pastoralApplication?: string;
  quotes?: { author: string; text: string; source: string }[];
  citations?: Citation[];
}

export interface FullStudy {
  id: string;
  book: string;
  chapter: number;
  theologicalTitle: string;
  subtitle: string;
  coverImage: string;
  estimatedReadingTime: number;
  contextualIntro: string;
  historicalContext: string;
  literaryContext: string;
  verses: VerseStudy[];
  redemptiveLine: string;
  originalMeaning?: string;
  hermeneuticalApplication?: { title: string; text: string }[];
  historyOfInterpretation?: {
    fathers?: { author: string; text: string; sourceId?: string }[];
    reformers?: { author: string; text: string; sourceId?: string }[];
    contemporary?: { author: string; text: string; sourceId?: string }[];
  };
  pastoralReflection: string;
  bibliography: string[];
  citations?: Citation[];
  refMap?: Record<number, string>;
}
