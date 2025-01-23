import { NavLink, useFullSidebarData, useLocation, history } from 'dumi';
import React, { memo } from 'react';

import { ISidebarGroup } from 'dumi/dist/client/theme-api/types';
import { handleFullSidebarData } from '../../utils/sidebar';
import { useStyles } from './style';

interface SidebarProps {
  onSelect?: () => void
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  const fullSidebar: Record<string, ISidebarGroup[]> = useFullSidebarData();
  const sidebar = handleFullSidebarData(fullSidebar);
  const {styles} = useStyles();
  const location = useLocation();
  const paths = location.pathname.split('/').filter((item) => item);
  const activeKey: string = `/${paths[0]}`;
  let activeSidebar: ISidebarGroup[] = sidebar[activeKey] || [];
  const isEmptySideBar = !fullSidebar;

  const onSelect = () => {
    if (typeof props.onSelect === 'function') {
      props.onSelect()
    }
  }
  return isEmptySideBar ? null : (
    <div className={styles.sidebar}>
      {activeSidebar.map((item, i) => (
        <dl key={String(i)}>
          {item.title && <dt>{item.title}</dt>}
          {item.children.map((child) => (
            <dd key={child.link} onClick={onSelect}>
              <NavLink to={child.link} title={child.title} end>
                {child.title}
              </NavLink>
            </dd>
          ))}
        </dl>
      ))}
    </div>
  );
};

export default memo(Sidebar);
