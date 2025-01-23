import React, { memo, useEffect } from 'react';
import { Flexbox } from 'react-layout-kit';

import Logo from 'dumi/theme-default/slots/Logo';
import Navbar from '../Navbar/index';
import SearchBar from 'dumi/theme-default/slots/SearchBar';

import Burger from '../../components/Burger';
import GithubButton from 'dumi-theme-antd-style/dist/components/GithubButton';
import ThemeSwitch from 'dumi-theme-antd-style/dist/components/ThemeSwitch';

import { useResponsive } from 'antd-style';
import { usePrefersColor } from 'dumi';
import { useSiteStore } from 'dumi-theme-antd-style/dist/store/useSiteStore';
import { useThemeStore } from 'dumi-theme-antd-style/dist/store/useThemeStore';
import { useStyle } from './style';

const Switcher = () => {
  const allowSwitchTheme = useSiteStore((s) => s.siteData.themeConfig.prefersColor.switch);
  const themeMode = useThemeStore((s) => s.themeMode);
  const [, , setColorMode] = usePrefersColor();
  useEffect(() => setColorMode(themeMode), [themeMode]);
  return allowSwitchTheme ? (
    <ThemeSwitch
      value={themeMode}
      onChange={(mode) => {
        useThemeStore.setState({ themeMode: mode });
      }}
    />
  ) : null;
};

const Header: React.FC = () => {
  const hasHeader = useSiteStore((s) => !!s.routeMeta.frontmatter);

  const { mobile } = useResponsive();
  const { styles } = useStyle();
  return !hasHeader ? null : (
    <div className={styles.header}>
      <Flexbox
        horizontal
        distribution={'space-between'}
        align={'center'}
        width={'auto'}
        className={styles.content}
      >
        {mobile ? (
          <>
            <Flexbox>
              <Burger />
            </Flexbox>
            <Flexbox horizontal className={styles.left}>
              <Logo />
            </Flexbox>
            <Flexbox>
              <Switcher />
            </Flexbox>
          </>
        ) : (
          <>
            <Flexbox horizontal className={styles.left}>
              <Logo />
            </Flexbox>
            <Flexbox style={{ marginLeft: 48, alignSelf: 'end' }}>
              <Navbar />
            </Flexbox>
            <section className={styles.right}>
              <div />
              <Flexbox
                gap={16}
                horizontal
                align={'center'}
                className="dumi-default-header-right-aside"
              >
                <SearchBar />
                <GithubButton />
                <Switcher />
              </Flexbox>
            </section>
          </>
        )}
      </Flexbox>
    </div>
  );
};

export default memo(Header);
