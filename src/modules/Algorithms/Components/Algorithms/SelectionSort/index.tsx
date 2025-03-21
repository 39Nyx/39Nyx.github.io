import React from 'react';
import { Algorithms } from "39nyx/modules/Algorithms/Components/Algorithms/Algorithms";

const SelectionSort: React.FC = () => {
  const algorithmComplexityData: AlgorithmComplexityDesc[] = [
    {
      condition: '所有情况',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      explain: '需要进行 n-1 轮选择，每轮需要扫描未排序部分'
    }
  ]
  return <Algorithms algorithmType={ 'SelectionSort' } algorithmComplexityData={ algorithmComplexityData }/>
};

export default SelectionSort;
