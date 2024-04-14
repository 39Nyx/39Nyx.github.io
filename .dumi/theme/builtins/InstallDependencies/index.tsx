import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import SourceCode from 'dumi/theme-default/builtins/SourceCode';
import React from 'react';
import styled from 'styled-components';
import NpmLogo from './npm';
import PnpmLogo from './pnpm';
import YarnLogo from './yarn';

interface InstallProps {
  npm?: string;
  yarn?: string;
  pnpm?: string;
}

const LabelWrapperStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-inline-end: 8px;
  }
`;

const npmLabel = (
  <LabelWrapperStyle>
    <NpmLogo />
    npm
  </LabelWrapperStyle>
);

const pnpmLabel = (
  <LabelWrapperStyle>
    <PnpmLogo />
    pnpm
  </LabelWrapperStyle>
);

const yarnLabel = (
  <LabelWrapperStyle>
    <YarnLogo />
    yarn
  </LabelWrapperStyle>
);

const InstallDependencies: React.FC<InstallProps> = (props) => {
  const { npm, yarn, pnpm } = props;
  const items = React.useMemo<TabsProps['items']>(
    () =>
      [
        {
          key: 'npm',
          children: npm ? <SourceCode lang="bash">{npm}</SourceCode> : null,
          label: npmLabel,
        },
        {
          key: 'yarn',
          children: yarn ? <SourceCode lang="bash">{yarn}</SourceCode> : null,
          label: yarnLabel,
        },
        {
          key: 'pnpm',
          children: pnpm ? <SourceCode lang="bash">{pnpm}</SourceCode> : null,
          label: pnpmLabel,
        },
      ].filter((item) => item.children),
    [npm, yarn, pnpm],
  );
  return (
    <Tabs className="antd-site-snippet" defaultActiveKey="npm" items={items} />
  );
};

export default InstallDependencies;
