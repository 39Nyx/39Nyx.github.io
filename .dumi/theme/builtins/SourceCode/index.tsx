import Editor from '@monaco-editor/react';
import OriginSourceCode, {
  ISourceCodeProps,
} from 'dumi/theme-default/builtins/SourceCode';
import React from 'react';

const SourceCode: React.FC<ISourceCodeProps> = (props) => {
  const simpleLanguages: string[] = ['text'];
  if (!props.lang || simpleLanguages.includes(props.lang)) {
    return <OriginSourceCode {...props}>{props.children}</OriginSourceCode>;
  }
  const lineCount = props.children.split('\n').length;
  const languageMap: any = {
    ts: 'typescript',
    tsx: 'typescript',
  };
  return (
    <Editor
      height={`${lineCount * 18 + 20}px`}
      language={languageMap[props.lang] || props.lang}
      defaultValue={props.children}
      options={{
        readOnly: true,
        wordWrap: 'on',
      }}
    />
  );
};
export default SourceCode;
