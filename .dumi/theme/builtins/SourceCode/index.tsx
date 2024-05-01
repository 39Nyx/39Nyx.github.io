import OriginSourceCode, {
  ISourceCodeProps,
} from 'dumi/theme-default/builtins/SourceCode';
import React from 'react';

const SourceCode: React.FC<ISourceCodeProps> = (props) => {
  return <OriginSourceCode {...props}>{props.children}</OriginSourceCode>;
};
export default SourceCode;
