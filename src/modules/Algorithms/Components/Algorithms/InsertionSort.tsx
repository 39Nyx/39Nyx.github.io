import React from 'react';
import { Algorithms } from "39nyx/modules/Algorithms/Components/Algorithms/Algorithms";

const InsertionSort: React.FC = () => {
  const algorithmComplexityData: AlgorithmComplexityDesc[] = [
    {
      condition: '最好情况',
      timeComplexity: 'O(n)',
      spaceComplexity: 'O(1)',
      explain: '数组已经有序'
    },
    {
      condition: '平均情况',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      explain: '需要部分元素移动'
    },
    {
      condition: '最坏情况',
      timeComplexity: 'O(n²)',
      spaceComplexity: 'O(1)',
      explain: '数组完全逆序'
    }
  ]
  return (
    <Algorithms
      algorithmComplexityData={ algorithmComplexityData }
      algorithmType={ 'InsertionSort' }
    />
  );
};

export default InsertionSort;
