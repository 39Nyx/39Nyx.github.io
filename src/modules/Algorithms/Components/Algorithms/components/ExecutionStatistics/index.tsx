import React from "react";
import { useStyles } from './style'

interface ExecutionStatisticsProps {
  /**
   * 比较次数
   */
  comparisons: number;
  /**
   * 交换次数
   */
  swaps: number;

  /**
   * 消息历史
   */
  messages: string[];
}

export const ExecutionStatistics: React.FC<ExecutionStatisticsProps> = (props) => {
  const { comparisons, swaps, messages } = props;
  const { styles } = useStyles()

  const messageRender = messages.map(item => {
    return (
      <div className={styles.messageItem} key={item}>
        { item }
      </div>
    )
  })
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>执行统计</h4>
      <div className={styles.statistics}>
        <div>
          <span className={styles.text}>比较次数:</span>
          <span className={styles.value}>{ comparisons }</span>
        </div>
        <div>
          <span className={styles.text}>交换次数:</span>
          <span className={styles.value}>{ swaps }</span>
        </div>
      </div>
      <div className={styles.messageContainer}>
        { messageRender }
      </div>
    </div>
  )
}
