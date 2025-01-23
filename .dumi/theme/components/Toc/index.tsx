import { ArrowDownOutlined, MenuOutlined } from '@ant-design/icons';
import { Anchor, Collapse, CollapseProps, ConfigProvider, Drawer } from 'antd';
import { useResponsive, useTheme } from 'antd-style';
import React, { memo, MouseEvent, useMemo, useState } from 'react';
import useControlledState from 'use-merge-value';

import { AnchorItem } from 'dumi-theme-antd-style/dist/types';
import { useStyles } from './style';
import Sidebar from "../../slots/Sidebar";

/**
 * @title 目录组件属性
 */
export interface TocProps {
  /**
   * @title 目录项列表
   */
  items: AnchorItem[];
  /**
   * @title 当前激活的目录项 key 值
   */
  activeKey?: string;
  /**
   * @title 目录项切换的回调函数
   * @param activeKey - 切换后的目录项 key 值
   */
  onChange?: (activeKey: string) => void;
}

const Toc: React.FC<TocProps> = memo(({items, activeKey, onChange}) => {
  const [activeLink, setActiveLink] = useControlledState<string>('', {
    value: activeKey,
    onChange,
  });
  const {styles} = useStyles();
  const {mobile} = useResponsive();

  const theme = useTheme();
  const activeAnchor: AnchorItem | undefined = items.find((item) => item.id === activeLink);

  const linkItems = useMemo(
    () =>
      items.map((item) => ({
        href: `#${item.id}`,
        title: item.title,
        key: item.id,
        children: item.children?.map((child) => ({
          href: `#${child.id}`,
          title: child?.title,
          key: child.id,
        })),
      })),
    [items],
  );

  const [opened, setOpened] = useState(false);

  const menuOutlinedClick = (event: MouseEvent) => {
    event.stopPropagation()
    setOpened(!opened)
  }

  const onClose = () => {
    setOpened(false)
  }

  const [isActive, setIsActive] = useState(false)

  const genExtra = () => isActive ? <ArrowDownOutlined/> : <MenuOutlined onClick={menuOutlinedClick}/>


  const collapseItems: CollapseProps['items'] = [
    {
      key: 'toc',
      label: !activeAnchor ? '目录' : activeAnchor.title,
      forceRender: true,
      extra: genExtra(),
      children: (
        <ConfigProvider theme={{token: {fontSize: 14, sizeStep: 4}}}>
          <Anchor
            onChange={(currentLink) => {
              setActiveLink(currentLink.replace('#', ''));
            }}
            targetOffset={theme.headerHeight + 12}
            items={linkItems}
          />
        </ConfigProvider>
      )
    }
  ];

  return (
    (items?.length === 0 ? null : mobile ? (
      <ConfigProvider theme={{token: {fontSize: 12, sizeStep: 3}}}>
        <div className={styles.mobileCtn}>
          <Collapse
            bordered={false}
            ghost
            expandIconPosition={'end'}
            className={styles.expand}
            items={collapseItems}
            expandIcon={() => null}
            onChange={() => setIsActive(!isActive)}
          />
        </div>
        <Drawer
          open={opened}
          placement={'left'}
          rootClassName={styles.drawerRoot}
          className={styles.drawer}
          styles={{
            body: {padding: 0},
          }}
          onClose={onClose}
        >
          <Sidebar onSelect={onClose} />
        </Drawer>
      </ConfigProvider>
    ) : (
      <div className={styles.container}>
        <h4>Table of Contents</h4>
        <Anchor items={linkItems} className={styles.anchor} targetOffset={theme.headerHeight + 12}/>
      </div>
    )) || null
  );
});

export default Toc;
