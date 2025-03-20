import React, { useState, useEffect } from 'react';
import { SortingAlgorithm } from '../../../models/SortingAlgorithm';
import BubbleSortControls from '../Sorting/BubbleSortControls';
import { ExecutionStatistics } from "39nyx/modules/Algorithms/Components/Algorithms/components/ExecutionStatistics";
import { AlgorithmComplexity } from "39nyx/modules/Algorithms/Components/Algorithms/components/AlgorithmComplexity";
import { SortVisualizer } from "39nyx/modules/Algorithms/Components/Algorithms/components/SortVisualizer";

const SelectionSort: React.FC = () => {
  const [sortingAlgorithm] = useState(() => new SortingAlgorithm());
  const [state, setState] = useState(() => sortingAlgorithm.getState());
  const [isSorting, setIsSorting] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  /**
   * 生成随机数组
   * @param size
   */
  const handleGenerateArray = (size: number) => {
    sortingAlgorithm.generateRandomArray(size);
  };

  useEffect(() => {
    // 订阅状态更新
    const unsubscribe = sortingAlgorithm.subscribe((newState) => {
      setState(newState);
      if (newState.message) {
        messages.unshift(newState.message)
        setMessages(messages)
      }
    });

    // 生成初始数组
    handleGenerateArray(10);

    return () => {
      unsubscribe();
    };
  }, [sortingAlgorithm]);

  /**
   * 开始排序
   */
  const handleSort = async () => {
    setIsSorting(true);
    await sortingAlgorithm.selectionSort();
    setIsSorting(false);
  };

  /**
   * 设置动画延迟
   * @param delay
   */
  const handleSetDelay = (delay: number) => {
    sortingAlgorithm.setDelay(delay);
  };

  const algorithmComplexityData: AlgorithmComplexityDesc[] = [
    {
      condition: '所有情况',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      explain: '需要进行 n-1 轮选择，每轮需要扫描未排序部分'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      <SortVisualizer array={ state.array }/>
      <div>
        <div>
          <BubbleSortControls
            onSort={ handleSort }
            onGenerateArray={ handleGenerateArray }
            onSetDelay={ handleSetDelay }
            isSorting={ isSorting }
          />
          {/*算法复杂度说明*/ }
          <AlgorithmComplexity
            dataSource={ algorithmComplexityData }
          />
          {/* 当前执行统计 */ }
          <ExecutionStatistics
            comparisons={ state.comparisons }
            swaps={ state.swaps }
            messages={ messages }
          />
        </div>
      </div>
    </div>
  );
};

export default SelectionSort;
