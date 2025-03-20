import { createStyles } from "antd-style";

export const useStyles = createStyles((theme) => {
  const { css } = theme
  return {
    container: css`
      --tw-bg-opacity: 1;
      background-color: rgb(239 246 255 / var(--tw-bg-opacity, 1)) /* #eff6ff */;
      border-radius: 0.5rem;
      padding: 1rem;
    `,
    title: css`
      font-size: 1.125rem /* 18px */;
      line-height: 1.75rem /* 28px */;
      font-weight: 600;
      margin-bottom: 0.5rem /* 8px */;
      --tw-text-opacity: 1;
      color: rgb(29 78 216 / var(--tw-text-opacity, 1)) /* #1d4ed8 */;
      margin-top: 0;
    `,
    statistics: css`
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1rem /* 16px */;
    `,
    text: css`
      --tw-text-opacity: 1;
      color: rgb(75 85 99 / var(--tw-text-opacity, 1)) /* #4b5563 */;
    `,
    value: css`
      margin-left: 0.5rem /* 8px */;
      font-weight: 600;
    `
  }
})
