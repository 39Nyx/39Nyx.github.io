import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => {
  return {
    collapse: css`
      transition: height 0.3s ease-in-out;
      color: rgba(0, 0, 0, 0.88);
      border: 1px solid #d9d9d9;
      border-radius: 8px;
      background-color: rgba(0, 0, 0, 0.02);
    `,
    item: css`
      border-bottom: 1px solid #d9d9d9;
    `,
    title: css`
      font-size: 14px;
      padding: 12px 16px;
      cursor: pointer;
    `,
    content: css`
      background-color: #fff;
      height: 0;
      overflow: hidden;
      transition: height 0.3s ease-in-out, padding 0.3s ease-in-out;
    `
  }
});
