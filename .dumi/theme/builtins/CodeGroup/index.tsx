import { Tabs, TabsProps } from 'antd';
import SourceCode, {
  ISourceCodeProps,
} from 'dumi/theme-default/builtins/SourceCode';
import { toArray } from 'lodash';
import React, { PropsWithChildren, ReactElement } from 'react';

type Unpacked<T> = T extends (infer U)[] ? U : T;
type Item = Unpacked<Required<TabsProps>['items']>;

const CodeGroup: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const usefulChildren = toArray(children).filter(
    (child: any) =>
      typeof child === 'object' &&
      typeof child.type === 'function' &&
      child.type?.name === SourceCode.name,
  ) as ReactElement<ISourceCodeProps>[];

  const items: TabsProps['items'] = usefulChildren.map<Item>((child, idx) => {
    const { lang, title } = child.props ?? {};

    return {
      key: String(child.key ?? idx),
      label: title || lang || 'txt', // fallback to txt if no lang and title
      children: child,
    };
  });
  return (
    <Tabs
      tabBarStyle={{
        marginBottom: 0,
        padding: '0 16px',
      }}
      items={items}
      style={{
        marginBottom: 0,
      }}
    />
  );
};

export default CodeGroup;
