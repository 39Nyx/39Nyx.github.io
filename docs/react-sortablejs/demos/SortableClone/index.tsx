import React, { useState } from 'react';
import { GroupOptions, ReactSortable, SortableEvent } from 'react-sortablejs';
import { useStyles } from './style';

const App: React.FC = () => {
  const { styles } = useStyles();
  const [leftList, setLeftList] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ]);
  const [rightList, setRightList] = useState([
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
  ]);

  const renderList = (list: { id: number; name: string }[]) => {
    return list.map((item) => {
      return (
        <div key={item.id} className={styles.item} data-id={item.id}>
          {item.name}
        </div>
      );
    });
  };
  const group: GroupOptions = {
    name: 'sortable-clone',
    pull: 'clone',
  };

  const clone = (data: any, event: SortableEvent) => {
    const id = Math.floor(Math.random() * 100000);
    console.log('执行了克隆', id, event);
    return {
      ...data,
      id: id,
    };
  };
  return (
    <div className={styles.flex}>
      <ReactSortable
        group={group}
        list={leftList}
        clone={clone}
        setList={setLeftList}
        animation={150}
        className={styles.halfway}
      >
        {renderList(leftList)}
      </ReactSortable>
      <ReactSortable
        group={group}
        list={rightList}
        clone={clone}
        setList={setRightList}
        animation={150}
        className={styles.halfway}
      >
        {renderList(rightList)}
      </ReactSortable>
    </div>
  );
};

export default App;
