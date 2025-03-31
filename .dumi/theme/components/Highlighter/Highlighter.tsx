import React, { memo, useEffect, useState } from 'react';
import { codeToHtml } from 'shiki'
import { useStyles } from './Highlighter.style';
import type { HighlighterProps } from './index';
import { usePrefersColor } from "dumi";

type SyntaxHighlighterProps = Pick<
  HighlighterProps,
  'language' | 'type' | 'children' | 'syntaxThemes'
>;

const SyntaxHighlighter: React.FC<SyntaxHighlighterProps> = memo<SyntaxHighlighterProps>(
  ({ children, language, syntaxThemes: syntaxTheme }) => {
    const { styles } = useStyles();
    const [theme] = usePrefersColor()
    const [html, setHtml] = useState('')
    useEffect(() => {
      codeToHtml(children, {
        lang: language,
        theme: theme === 'light' ? 'light-plus' : 'material-theme-ocean'
      }).then(setHtml)
    }, [theme]);

    return (
      <>
        <div
          dangerouslySetInnerHTML={ {
            __html: html,
          } }
          className={ styles.shiki }
        />
      </>
    );
  },
);

export default SyntaxHighlighter;
