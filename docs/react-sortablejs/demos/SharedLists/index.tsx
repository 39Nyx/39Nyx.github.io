import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { useStyles } from './style';

const App: React.FC = () => {
  const [leftList, setLeftList] = useState([
    { id: 1, text: 'Item 1', bg: '' },
    { id: 2, text: 'Item 2', bg: '' },
    { id: 3, text: 'Item 3', bg: '' },
    { id: 4, text: 'Item 4', bg: '' },
    { id: 5, text: 'Item 5', bg: '' },
  ]);
  const [rightList, setRightList] = useState([
    { id: 6, text: 'Item 1', bg: 'tinted' },
    { id: 7, text: 'Item 2', bg: 'tinted' },
    { id: 8, text: 'Item 3', bg: 'tinted' },
    { id: 9, text: 'Item 4', bg: 'tinted' },
    { id: 10, text: 'Item 5', bg: 'tinted' },
  ]);
  const { styles } = useStyles();
  return (
    <div className={styles.flex}>
      <ReactSortable
        group={'shared'}
        list={leftList}
        setList={setLeftList}
        animation={150}
        className={styles.halfway}
      >
        {leftList.map((item) => (
          <div
            className={`${styles.item} ${item.bg ? styles.tinted : ''}`}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
      </ReactSortable>
      <ReactSortable
        group={'shared'}
        list={rightList}
        setList={setRightList}
        animation={150}
        className={styles.halfway}
      >
        {rightList.map((item) => (
          <div
            className={`${styles.item} ${item.bg ? styles.tinted : ''}`}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};

export default App;
