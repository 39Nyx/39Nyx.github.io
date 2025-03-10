import {
  ISourceCodeProps,
} from 'dumi/theme-default/builtins/SourceCode';
import React, { lazy, Suspense, useEffect, useRef } from 'react';
import { Spin } from "antd";

interface SourceCodeProps extends ISourceCodeProps {
  monacoEditor?: boolean;
}

const LazySourceCode = lazy(() => import('./LazySourceCode'))

const SourceCode: React.FC<SourceCodeProps> = (props) => {

  return (
    <Suspense fallback={ <Spin /> }>
      <LazySourceCode { ...props } />
    </Suspense>
  );
};

export default SourceCode;
