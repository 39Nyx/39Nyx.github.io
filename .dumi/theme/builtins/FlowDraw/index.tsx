import { Excalidraw } from '@excalidraw/excalidraw';
import axios from 'axios';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';

const FlowDraw: React.FC<any> = (props) => {
  const [initialData, setInitialData] = useState<any>({});
  const [drawAPI, setDrawAPI] = useState<any>({});
  useEffect(() => {
    axios.get(props.src).then((res) => {
      setInitialData(res.data);
    });
  }, []);

  useEffect(() => {
    if (!isEmpty(initialData)) {
      drawAPI?.updateScene(initialData);
      drawAPI?.resetScene();
    }
  }, [drawAPI, initialData]);
  return (
    <div style={{ height: '500px' }}>
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
