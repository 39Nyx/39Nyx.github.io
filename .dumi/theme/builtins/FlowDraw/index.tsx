import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Spin } from 'antd'
const LazyFlowDraw = lazy(() => import('./FlowDraw'))

const FlowDraw: React.FC<any> = (props) => {

  return (
    <Suspense fallback={ <Spin /> }>
      <LazyFlowDraw {...props} />
    </Suspense>
  );
};

export default FlowDraw;
