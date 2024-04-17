import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import styled from 'styled-components';

interface ItemType {
  id: number;
  name: string;
}

const DraggableItem = styled.div`
  cursor: move;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f2f2f2;
  border-radius: 5px;
`;

const App: React.FC = () => {
  const [state, setState] = useState<ItemType[]>([
    { id: 1, name: 'shrek' },
    { id: 2, name: 'fiona' },
  ]);
  return (
    <ReactSortable list={state} setList={setState} animation={150}>
      {state.map((item) => (
        <DraggableItem key={item.id}>{item.name}</DraggableItem>
      ))}
    </ReactSortable>
  );
};

export default App;
