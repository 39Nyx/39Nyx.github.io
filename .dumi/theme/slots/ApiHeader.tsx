import {
  ApiHeader as Header,
  siteSelectors,
  useSiteStore,
} from 'dumi-theme-antd-style';
import { ServiceItem } from 'dumi-theme-antd-style/dist/components/ApiHeader';
import React, { FC, memo } from 'react';

const ApiHeader: FC = memo(() => {
  const props = useSiteStore(siteSelectors.apiHeader);

  const packages: ServiceItem[] | undefined = [];

  return <Header serviceList={packages} {...props} />;
});

export default ApiHeader;
