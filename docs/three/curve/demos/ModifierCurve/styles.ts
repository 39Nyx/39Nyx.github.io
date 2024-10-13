import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => {
  return {
    container: css`
      min-height: 300px;
      height: 100%;
    `,
  };
});
