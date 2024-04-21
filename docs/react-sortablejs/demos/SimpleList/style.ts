import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => {
  return {
    'draggable-item': css`
      cursor: move;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #f2f2f2;
      border-radius: 5px;
    `,
    ghost: css`
      background-color: #c8ebfb;
    `,
  };
});
