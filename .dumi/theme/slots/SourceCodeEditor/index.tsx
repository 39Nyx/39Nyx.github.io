import React, { ComponentProps, FC, useRef, useState } from 'react';
import SourceCode from '../../builtins/SourceCode';

interface ISourceCodeEditorProps
  extends Omit<ComponentProps<typeof SourceCode>, 'children'> {
  initialValue: string;
  onTranspile?: (
    args: { err: Error; code?: null } | { err?: null; code: string },
  ) => void;
  onChange?: (code: string) => void;
}

const SourceCodeEditor: FC<ISourceCodeEditorProps> = (
  props: ISourceCodeEditorProps,
) => {
  const elm = useRef<HTMLDivElement>(null);
  const [code] = useState(props.initialValue);
  return (
    <div className="dumi-default-source-code-editor" ref={elm}>
      <SourceCode {...props} monacoEditor={true}>
        {code}
      </SourceCode>
    </div>
  );
};

export default SourceCodeEditor;
