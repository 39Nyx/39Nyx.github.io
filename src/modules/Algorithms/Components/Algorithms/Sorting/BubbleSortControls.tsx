import React, { useState } from 'react';
import { Button, Space } from "antd";

interface BubbleSortControlsProps {
  onSort: () => Promise<void>;
  onGenerateArray: (size: number) => void;
  onSetDelay: (delay: number) => void;
  isSorting: boolean;
}

const BubbleSortControls: React.FC<BubbleSortControlsProps> = (props) => {
  const {
    onSort,
    onGenerateArray,
    onSetDelay,
    isSorting
  } = props
  const [arraySize, setArraySize] = useState(10);
  const [delay, setDelay] = useState(500);

  const handleArraySizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const size = parseInt(e.target.value);
    setArraySize(size);
    onGenerateArray(size);
  };

  const handleDelayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDelay = parseInt(e.target.value);
    setDelay(newDelay);
    onSetDelay(newDelay);
  };


  return (
    <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
      {/* 数组大小控制 */ }
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          数组大小: { arraySize }
        </label>
        <input
          type="range"
          min="5"
          max="50"
          value={ arraySize }
          onChange={ handleArraySizeChange }
          disabled={ isSorting }
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* 动画速度控制 */ }
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          动画延迟: { delay }ms
        </label>
        <input
          type="range"
          min="50"
          max="1000"
          step="50"
          value={ delay }
          onChange={ handleDelayChange }
          disabled={ isSorting }
          className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* 操作按钮 */ }
      <Space className="flex space-x-2">
        <Button
          onClick={ () => {
            if (isSorting) {
              return
            }
            onGenerateArray(arraySize)
          } }
          type={ 'primary' }
        >
          生成新数组
        </Button>
        <Button
          onClick={ () => {
            if (isSorting) {
              return
            }
            onSort().then(() => {
            })
          } }
          loading={ isSorting }
          variant="solid"
          color={ 'purple' }
        >
          开始排序
        </Button>
      </Space>
    </div>
  );
};

export default BubbleSortControls;
