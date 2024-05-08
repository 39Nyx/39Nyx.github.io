import OriginSourceCode, {
  ISourceCodeProps,
} from 'dumi/theme-default/builtins/SourceCode';
import * as monaca from 'monaco-editor';
import React, { useEffect, useRef } from 'react';

const SourceCode: React.FC<ISourceCodeProps> = (props) => {
  const simpleLanguages: string[] = ['text', 'shell'];
  if (!props.lang || simpleLanguages.includes(props.lang)) {
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
  }, []);
  return (
    <pre
      style={{
        height: `${lineCount * 10 + 20}px`,
        marginTop: 0,
      }}
      ref={ref}
    ></pre>
  );
};

export default SourceCode;
