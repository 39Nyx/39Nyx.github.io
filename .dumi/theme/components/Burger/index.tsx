import { Drawer, Menu, MenuProps } from 'antd';
import { history } from 'dumi';
import isEqual from 'fast-deep-equal';
import React, { useState } from 'react';
import { Center } from 'react-layout-kit';

import { useSiteStore } from 'dumi-theme-antd-style/dist/store';
import { useStyles } from './style';

const Burger: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const {styles, cx} = useStyles();

  const nav = useSiteStore((s) => s.navData, isEqual);
  const pathname = useSiteStore((s) => s.location.pathname);
  const menuItems: MenuProps['items'] = nav.map((item) => ({
    label: item.title,
    key: item.activePath! || item.link!,
    children: item.children?.map(child => {
      return {
        label: child.title,
        key: child.link
      }
    }),
  }))
  const onClick: MenuProps['onClick'] = (event) => {
    history.push({
      pathname: event.key
    })
    setOpened(false)
  };
  return (
    <Center
      className={styles.container}
      onClick={(event) => {
        if (!opened) {
          setOpened(!opened);
        } else {
          const target = event.target as HTMLElement;
          if (target.className.includes('-center')) {
            setOpened(false);
          }
        }
      }}
    >
      <div className={cx(styles.icon, opened ? styles.active : '')}/>

      <Drawer
        open={opened}
        placement={'left'}
        closeIcon={null}
        rootClassName={styles.drawerRoot}
        className={styles.drawer}
        width={'100vw'}
        styles={{
          header: {display: 'none'},
          body: {padding: 0},
        }}
      >
        <div style={{height: 24}} className={styles.rect}/>
        <Menu
          mode={'inline'}
          className={styles.menu}
          items={menuItems}
          onClick={onClick}
        />
        <div style={{flex: 1}} className={styles.rect}/>
      </Drawer>
    </Center>
  );
};

export default Burger;
