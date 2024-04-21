import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { useStyles } from './style';

interface ItemType {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [state, setState] = useState<ItemType[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ]);
  const { styles } = useStyles();
  return (
    <ReactSortable
      list={state}
      setList={setState}
      animation={150}
      ghostClass={styles.ghost}
    >
      {state.map((item) => (
        <div className={styles['draggable-item']} key={item.id}>
          {item.name}
        </div>
      ))}
    </ReactSortable>
  );
};

export default App;
