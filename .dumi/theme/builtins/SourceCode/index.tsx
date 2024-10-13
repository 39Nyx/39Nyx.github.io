import OriginSourceCode, {
  ISourceCodeProps,
} from 'dumi/theme-default/builtins/SourceCode';
import * as monaca from 'monaco-editor';
import React, { useEffect, useRef } from 'react';
import { useStyles } from './style';

interface SourceCodeProps extends ISourceCodeProps {
  monacoEditor?: boolean;
}

const SourceCode: React.FC<SourceCodeProps> = (props) => {
  const simpleLanguages: string[] = ['text', 'shell'];
  const { styles } = useStyles();
  if (!props.monacoEditor) {
    return <OriginSourceCode {...props}>{props.children}</OriginSourceCode>;
  }
  const lineCount: number = props.children.split('\n').length;
  const languageMap: any = {
    ts: 'typescript',
    tsx: 'typescript',
  };
  const ref = useRef<any>(null);
  useEffect(() => {
    const editor = monaca.editor.create(ref.current, {
      value: props.children,
      language: languageMap[props.lang] || props.lang,
      readOnly: true,
      wordWrap: 'on',
      automaticLayout: true,
      scrollBeyondLastLine: false,
    });
    if (props.highlightLines) {
      const ranges: { startLineNumber: number; endLineNumber: number }[] = [];
      let currentLine: number = props.highlightLines[0];
      let index: number = 1;
      let start: number = currentLine;
      while (index < props.highlightLines.length) {
        if (props.highlightLines[index] === currentLine + 1) {
          index++;
        } else {
          ranges.push({ startLineNumber: start, endLineNumber: currentLine });
          start = props.highlightLines[index];
          currentLine = start;
          index++;
        }
      }
      ranges.push({ startLineNumber: start, endLineNumber: currentLine });
      editor.createDecorationsCollection(
        ranges.map((range) => {
          return {
            range: new monaca.Range(
              range.startLineNumber,
              1,
              range.endLineNumber,
              1,
            ),
            options: {
              isWholeLine: true,
              className: styles.myContentClass,
            },
          };
        }),
      );
    }
  }, []);
  const height = lineCount * 18 + 20;
  return (
    <pre
      style={{
        height: `${height > 500 ? 500 : height}px`,
        marginTop: 0,
      }}
      ref={ref}
    ></pre>
  );
};

export default SourceCode;
