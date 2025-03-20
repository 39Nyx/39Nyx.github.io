import { createStyles } from "antd-style";

export const useStyles = createStyles((theme) => {
  const { css } = theme;
  return {
    container: css`
      width: 100%;
      height: 20rem;
    `
  }
})
