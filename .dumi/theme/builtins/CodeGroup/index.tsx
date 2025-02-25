import { Tabs, TabsProps } from 'antd';
import SourceCode, {
  ISourceCodeProps,
} from 'dumi/theme-default/builtins/SourceCode';
import { toArray } from 'lodash';
import React, { cloneElement, PropsWithChildren, ReactElement } from 'react';
import { LanguageIcon } from "../../components/languageIcon";

type Unpacked<T> = T extends (infer U)[] ? U : T;
type Item = Unpacked<Required<TabsProps>['items']>;

const CodeGroup: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const usefulChildren = toArray(children).filter(
    (child: any) =>
      typeof child === 'object' &&
      typeof child.type === 'function',
  ) as ReactElement<ISourceCodeProps>[];

  const items: TabsProps['items'] = usefulChildren.map<Item>((child, idx) => {
    const { lang, title } = child.props ?? {};

    const key = String(child.key ?? idx);
    const label = title || lang || 'txt';
    const newChild = cloneElement(child, {
      ...child.props,
      title: ''
    })
    return {
      key: key,
      label: <LanguageIcon name={ label }/>, // fallback to txt if no lang and title
      children: newChild
    };
  });
  return (
    <Tabs
      items={ items }
    />
  );
};

export default CodeGroup;
