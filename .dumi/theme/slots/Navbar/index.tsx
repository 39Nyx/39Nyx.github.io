import { Menu, MenuProps } from 'antd';
import { createStyles } from 'antd-style';
import { Link } from 'dumi';
import { activePathSel, useSiteStore } from 'dumi-theme-antd-style/dist/store';
import NavbarExtra from 'dumi/theme-default/slots/NavbarExtra';
import React, { memo } from 'react';
import { shallow } from 'zustand/shallow';

const useStyles = createStyles(
  ({ css, responsive, token, stylish, prefixCls }) => {
    const prefix = `.${prefixCls}-tabs`;

    const marginHoriz = 16;
    const paddingVertical = 6;

    return {
      tabs: css`
        ${prefix}-tab + ${prefix}-tab {
          margin: ${marginHoriz}px 4px !important;
          padding: 0 12px !important;
        }

        ${prefix}-tab {
          color: ${token.colorTextSecondary};
          transition: background-color 100ms ease-out;

          &:first-child {
            margin: ${marginHoriz}px 4px ${marginHoriz}px 0;
            padding: ${paddingVertical}px 12px !important;
          }

          &:hover {
            color: ${token.colorText} !important;
            background: ${token.colorFillTertiary};
            border-radius: ${token.borderRadius}px;
          }
        }

        ${prefix}-nav {
          margin-bottom: 0;
        }

        ${responsive.mobile} {
          display: none;
        }
      `,

      link: css`
        ${stylish.resetLinkColor}
      `,
    };
  },
);

const Navbar: React.FC = () => {
  const { styles } = useStyles();

  const regLink = /^(\w+:)\/\/|^(mailto|tel):/;
  const nav = useSiteStore((s) => s.navData, shallow);
  const activePath = useSiteStore(activePathSel);
  console.log(nav);
  const createMenuItems = (navList: any[]): MenuProps['items'] => {
    return navList.map((item) => ({
      label: item.children ? (
        <span> {item.title}</span>
      ) : regLink.test(item.link || '') ? (
        <a
          href={item.link}
          className={styles.link}
          target="_blank"
          rel="noreferrer"
        >
          {item.title}
        </a>
      ) : (
        <Link className={styles.link} to={item.link!}>
          {item.title}
        </Link>
      ),
      key: item.activePath! || item.link!,
      children: item.children ? createMenuItems(item.children) : undefined,
    }));
  };

  const menuItems: MenuProps['items'] = createMenuItems(nav);

  return (
    <>
      <Menu
        mode="horizontal"
        style={{ lineHeight: '64px', backgroundColor: 'transparent' }}
        activeKey={activePath}
        className={styles.tabs}
        items={menuItems}
      />
      <NavbarExtra />
    </>
  );
};

export default memo(Navbar);
