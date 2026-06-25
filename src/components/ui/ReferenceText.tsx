import { Fragment, useMemo } from 'react';
import { studyRepo } from '../../data';

interface ReferenceTextProps {
  text: string;
  refMap?: Record<number, string>;
}

export default function ReferenceText({ text, refMap = {} }: ReferenceTextProps) {
  const htmlMode = typeof text === 'string' && text.includes('<a ') && text.includes('ref-link');

  if (htmlMode) {
    // Dynamically replace emojis followed by <b> tags with elegant CSS labels
    const processedHtml = text.replace(
      /(?:\p{Emoji_Presentation}|\p{Extended_Pictographic}|\p{Emoji}\uFE0F)\s*<b>([^<]+)<\/b>/gu,
      '<span class="study-label">$1</span>'
    );
    return <span dangerouslySetInnerHTML={{ __html: processedHtml }} />;
  }

  const parts = useMemo(() => {
    if (!text) return [{ type: 'text' as const, content: '' }];

    const pattern = /(^|[^A-Za-zÁÉÍÓÚáéíóú0-9])(\d{1,2})\s*(?=[A-Za-zÁÉÍÓÚáéíóú])/g;
    const result: { type: 'text' | 'ref'; content: string; num?: number }[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = pattern.exec(text)) !== null) {
      const num = parseInt(match[2], 10);

      if (match.index > lastIndex) {
        result.push({ type: 'text', content: text.slice(lastIndex, match.index + match[1].length) });
      }

      const sourceId = refMap[num];
      const source = sourceId ? studyRepo.getSourceById(sourceId) : null;

      if (source && source.url) {
        result.push({ type: 'ref', content: match[0].slice(match[1].length), num });
      } else {
        result.push({ type: 'text', content: match[0] });
      }

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      result.push({ type: 'text', content: text.slice(lastIndex) });
    }

    return result;
  }, [text, refMap]);

  return (
    <>
      {parts.map((part, i) => {
        if (part.type === 'text') {
          return <Fragment key={i}>{part.content}</Fragment>;
        }
        const sourceId = part.num ? refMap[part.num] : undefined;
        const source = sourceId ? studyRepo.getSourceById(sourceId) : null;
        if (!source || !source.url) return <Fragment key={i}>{part.content}</Fragment>;

        return (
          <Fragment key={i}>
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline text-accent hover:text-accent-foreground font-sans font-bold text-[0.85em] no-underline transition-colors"
              title={`${source.author}, ${source.title}`}
            >
              [{part.num}]
            </a>
            <span>{part.content.replace(/^\d+\s*/, '')}</span>
          </Fragment>
        );
      })}
    </>
  );
}