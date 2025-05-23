import { Excalidraw } from '@excalidraw/excalidraw';
import axios from 'axios';
import { isEmpty } from 'lodash';
import React, { lazy, useEffect, useState } from 'react';

const FlowDraw: React.FC<any> = (props) => {
  const [initialData, setInitialData] = useState<any>({});
  const [drawAPI, setDrawAPI] = useState<any>({});
  const { height = '500px' } = props;
  useEffect(() => {
    axios.get(props.src).then((res) => {
      setInitialData(res.data);
    });
  }, []);

  useEffect(() => {
    if (!isEmpty(initialData) && drawAPI?.updateScene) {
      drawAPI?.updateScene(initialData);
    }
  }, [drawAPI, initialData]);
  return (
    <div style={{ height: height }}>
      <Excalidraw
        initialData={initialData}
        excalidrawAPI={(api: any) => {
          setDrawAPI(api);
        }}
      />
    </div>
  );
};

export default FlowDraw;
