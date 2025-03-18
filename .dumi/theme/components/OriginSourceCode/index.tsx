import React from 'react';

import { ThemeProvider } from 'dumi-theme-antd-style/dist/components/DumiSiteProvider';
import { Highlighter } from '../Highlighter/index';
import { useSiteStore } from 'dumi-theme-antd-style/dist/store';

interface SourceCodeProps {
  lang: string;
  children: string;
}

const OriginSourceCode: React.FC<SourceCodeProps> = ({ children, lang }) => {
  const theme = useSiteStore((s) => s.siteData.themeConfig.syntaxTheme);

  console.log(theme, lang)
  return (
    <ThemeProvider>
      <Highlighter syntaxThemes={theme} language={lang}>
        {children}
      </Highlighter>
    </ThemeProvider>
  );
};

export default OriginSourceCode;
