import isEqual from 'fast-deep-equal';
import React, { memo } from 'react';

import TOC from '../../components/Toc/index';
import { tocAnchorItemSel, useSiteStore } from 'dumi-theme-antd-style/dist/store';

const Toc: React.FC = memo(() => {
  const items = useSiteStore(tocAnchorItemSel, isEqual);

  return <TOC items={items} />;
});

export default Toc;
