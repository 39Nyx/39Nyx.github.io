import React, { useEffect, useState } from "react";
import { AlgorithmFactory } from "39nyx/modules/Algorithms/algorithms/AlgorithmFactory";
import { SortVisualizer } from "39nyx/modules/Algorithms/Components/Algorithms/components/SortVisualizer";
import BubbleSortControls from "39nyx/modules/Algorithms/Components/Algorithms/Sorting/BubbleSortControls";
import { AlgorithmComplexity } from "39nyx/modules/Algorithms/Components/Algorithms/components/AlgorithmComplexity";
import { ExecutionStatistics } from "39nyx/modules/Algorithms/Components/Algorithms/components/ExecutionStatistics";

export type AlgorithmType = 'SelectionSort' | 'InsertionSort'

export const Algorithms: React.FC<{
  algorithmType: AlgorithmType;
  algorithmComplexityData: AlgorithmComplexityDesc[]
}> = (props) => {
  const { algorithmType = 'SelectionSort', algorithmComplexityData = [] } = props;
  const [sortingAlgorithm] = useState(() => AlgorithmFactory.create(algorithmType));
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
    await sortingAlgorithm.sort();
    setIsSorting(false);
  };

  /**
   * 设置动画延迟
   * @param delay
   */
  const handleSetDelay = (delay: number) => {
    sortingAlgorithm.setDelay(delay);
  };

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
}
