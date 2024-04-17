import { NavLink, useFullSidebarData, useLocation, useRouteMeta } from 'dumi';
import React, { memo } from 'react';

import { ISidebarGroup } from 'dumi/dist/client/theme-api/types';
import { handleFullSidebarData } from '../../utils/sidebar';
import { useStyles } from './style';

const Sidebar: React.FC = () => {
  const fullSidebar: Record<string, ISidebarGroup[]> = useFullSidebarData();
  const sidebar = handleFullSidebarData(fullSidebar);
  const { styles } = useStyles();
  const location = useLocation();
  const paths = location.pathname.split('/').filter((item) => item);
  const activeKey: string = `/${paths[0]}`;
  let activeSidebar: ISidebarGroup[] = sidebar[activeKey] || [];
  if (activeKey === '/components') {
    const routeMeta = useRouteMeta();
    const title =
      typeof routeMeta.frontmatter.group === 'object'
        ? routeMeta.frontmatter.group.title
        : routeMeta.frontmatter.group;
    const childGroup = activeSidebar.find((item) => item.title === title);
    if (childGroup) {
      activeSidebar = [childGroup];
    }
  }
  const isEmptySideBar = !fullSidebar;
  return isEmptySideBar ? null : (
    <div className={styles.sidebar}>
      {activeSidebar.map((item, i) => (
        <dl key={String(i)}>
          {item.title && <dt>{item.title}</dt>}
          {item.children.map((child) => (
            <dd key={child.link}>
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
