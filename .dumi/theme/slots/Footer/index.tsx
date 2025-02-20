import { Divider } from 'antd';
import { useResponsive } from 'antd-style';
import React from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import { IFooter } from 'dumi-theme-antd-style/dist/types';
import Foot, { FooterProps } from 'dumi-theme-antd-style/dist/components/Footer';
import { useSiteStore } from 'dumi-theme-antd-style/dist/store';
import { useStyles } from './style';

const Footer: React.FC = () => {
  const { themeConfig, pkg } = useSiteStore((s) => s.siteData);

  const { styles, theme } = useStyles();
  const { mobile } = useResponsive();
  if (!themeConfig.footer) return null;

  const footer = themeConfig.footerConfig as IFooter;

  const bottomFooter = footer?.bottom || themeConfig.footer;
  const copyright = footer?.copyright || `Copyright © 2022-${ new Date().getFullYear() }`;
  return (
    <Foot
      theme={ footer?.theme || (theme.appearance as FooterProps['theme']) }
      columns={ [] }
      bottom={
        mobile ? (
          <Center className={ styles.container }>
            { copyright }
            <Flexbox
              align={ 'center' }
              horizontal
              dangerouslySetInnerHTML={ { __html: bottomFooter } }
            ></Flexbox>
          </Center>
        ) : (
          <Center horizontal>
            { copyright }
            <Divider type={ 'vertical' }/>
            <span dangerouslySetInnerHTML={ { __html: bottomFooter } }/>
          </Center>
        )
      }
    />
  );
};

export default Footer;
