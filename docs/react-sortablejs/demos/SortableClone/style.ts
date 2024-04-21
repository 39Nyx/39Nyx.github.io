import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => {
  return {
    flex: css`
      display: flex;
      justify-content: space-between;
    `,
    halfway: css`
      width: 49.5%;
    `,
    item: css`
      cursor: move;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #f2f2f2;
      border-radius: 5px;
    `,
  };
});
