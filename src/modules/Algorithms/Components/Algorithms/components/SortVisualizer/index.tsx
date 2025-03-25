import React, { useEffect, useRef, useState } from "react";
import { useStyles } from './styles'
import * as echarts from 'echarts'
import { ECharts } from 'echarts'
import { ArrayElement } from '../../../../models/SortingAlgorithm';

interface SortVisualizerProps {
  array: ArrayElement[]
}

/**
 * 排序可视化组件
 * @constructor
 */
export const SortVisualizer: React.FC<SortVisualizerProps> = ({ array }) => {
  const { styles } = useStyles()
  const containerRef = useRef<HTMLDivElement>(null);
  const [chart, setChart] = useState<ECharts>();
  useEffect(() => {
    const container = containerRef?.current;
    if (container) {
      const newChart = echarts.init(container)
      setChart(newChart)
    }
  }, []);

  useEffect(() => {
    debugger
    const getBarColor = (state: ArrayElement['state']) => {
      switch (state) {
        case 'comparing':
          return '#1677ff'
        case 'current':
          return '#1677ff';
        case 'pivot':
          return '#ff4d4f';
        case 'sorted':
          return '#73d13d';
        case 'swapping':
          return '#ffdb5c'
        default:
          return '#3fb1e3';
      }
    }
    if (chart) {
      chart.resize()
      chart.setOption({
        xAxis: {
          type: 'category',
          data: array.map(item => item.value),
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: array.map(item => {
              return {
                value: item.value,
                itemStyle: {
                  color: getBarColor(item.state)
                }
              }
            }),
            type: 'bar'
          }
        ]
      })
    }
  }, [array, chart]);
  return (
    <div
      ref={ containerRef }
      className={ styles.container }
    ></div>
  )
}
