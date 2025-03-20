import React, { useState, useEffect } from 'react';
import { SortingAlgorithm } from '../../../models/SortingAlgorithm';
import BubbleSortVisualizer from '../Sorting/BubbleSortVisualizer';
import BubbleSortControls from '../Sorting/BubbleSortControls';
import { ExecutionStatistics } from "39nyx/modules/Algorithms/Components/Algorithms/components/ExecutionStatistics";
import { AlgorithmComplexity } from "39nyx/modules/Algorithms/Components/Algorithms/components/AlgorithmComplexity";

const SelectionSort: React.FC = () => {
  const [sortingAlgorithm] = useState(() => new SortingAlgorithm());
  const [state, setState] = useState(() => sortingAlgorithm.getState());
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    // 生成初始数组
    handleGenerateArray(10);

    // 订阅状态更新
    const unsubscribe = sortingAlgorithm.subscribe((newState) => {
      setState(newState);
    });

    return () => {
      unsubscribe();
    };
  }, [sortingAlgorithm]);

  const handleSort = async () => {
    setIsSorting(true);
    await sortingAlgorithm.selectionSort();
    setIsSorting(false);
  };

  const handleGenerateArray = (size: number) => {
    sortingAlgorithm.generateRandomArray(size);
  };

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
      <h2 className="text-2xl font-bold mb-6">选择排序可视化</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
          <BubbleSortVisualizer
            array={ state.array }
          />
        </div>

        <div>
          <BubbleSortControls
            onSort={ handleSort }
            onGenerateArray={ handleGenerateArray }
            onSetDelay={ handleSetDelay }
            isSorting={ isSorting }
          />
        </div>

        <div>
          {/*算法复杂度说明*/}
          <AlgorithmComplexity
            dataSource={ algorithmComplexityData }
          />
          {/* 当前执行统计 */ }
          <ExecutionStatistics
            comparisons={ state.comparisons }
            swaps={ state.swaps }
          />
        </div>
      </div>

      {/* 操作提示 */ }
      { state.message && (
        <div className="mt-4 p-2 bg-blue-100 text-blue-700 rounded">
          { state.message }
        </div>
      ) }
    </div>
  );
};

export default SelectionSort;
