import React, { lazy, Suspense, useEffect, useState } from 'react';

const LazyFlowDraw = lazy(() => import('./FlowDraw'))

const FlowDraw: React.FC<any> = (props) => {

  return (
    <Suspense fallback={ <div>loading...</div> }>
      <LazyFlowDraw {...props} />
    </Suspense>
  );
};

export default FlowDraw;
