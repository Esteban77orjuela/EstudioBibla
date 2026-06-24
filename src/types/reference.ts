export interface Source {
  id: string;
  author: string;
  title: string;
  subtitle?: string;
  publisher?: string;
  year?: number;
  pages?: string;
  url?: string;
  doi?: string;
  type: 'book' | 'commentary' | 'article' | 'lecture' | 'letter' | 'creed' | 'confession';
}

export interface Citation {
  number: number;
  sourceId: string;
  location?: string;
  quote?: string;
}

export interface ReferenceGroup {
  citations: Citation[];
  sources: Record<string, Source>;
}
