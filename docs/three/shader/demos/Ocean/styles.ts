import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => {
  return {
    container: css`
      min-height: 100vh;
      height: 100%;
    `,
  };
});
