import React, { useState, useEffect } from 'react';
import { SortingAlgorithm } from '../../models/SortingAlgorithm';
import BubbleSortVisualizer from './Sorting/BubbleSortVisualizer';
import BubbleSortControls from './Sorting/BubbleSortControls';

const InsertionSort: React.FC = () => {
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
    await sortingAlgorithm.insertionSort();
    setIsSorting(false);
  };

  const handleGenerateArray = (size: number) => {
    sortingAlgorithm.generateRandomArray(size);
  };

  const handleSetDelay = (delay: number) => {
    sortingAlgorithm.setDelay(delay);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
          <BubbleSortVisualizer
            array={state.array}
          />
        </div>

        <div>
          <BubbleSortControls
            onSort={handleSort}
            onGenerateArray={handleGenerateArray}
            onSetDelay={handleSetDelay}
            isSorting={isSorting}
          />
        </div>

        <div>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">情况</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">时间复杂度</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">空间复杂度</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">说明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">最好情况</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">O(n)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">O(1)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">数组已经有序</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">平均情况</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">O(n²)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">O(1)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">需要部分元素移动</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">最坏情况</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">O(n²)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">O(1)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">数组完全逆序</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 当前执行统计 */}
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2 text-blue-700">执行统计</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-gray-600">比较次数:</span>
                  <span className="ml-2 font-semibold">{state.comparisons}</span>
                </div>
                <div>
                  <span className="text-gray-600">移动次数:</span>
                  <span className="ml-2 font-semibold">{state.swaps}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 操作提示 */}
      {state.message && (
        <div className="mt-4 p-2 bg-blue-100 text-blue-700 rounded">
          {state.message}
        </div>
      )}
    </div>
  );
};

export default InsertionSort;
