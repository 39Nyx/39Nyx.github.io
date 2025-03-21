import { SelectionSort } from './SelectionSort'
import { AlgorithmEvents } from "39nyx/modules/Algorithms/algorithms/AlgorithmEvents";
import { AlgorithmType } from "39nyx/modules/Algorithms/Components/Algorithms/Algorithms";
import { InsertionSort } from "./InsertionSort";

export class AlgorithmFactory {
  static create(algorithmName: AlgorithmType) {
    switch (algorithmName) {
      case 'SelectionSort':
        return new SelectionSort();
      case 'InsertionSort':
        return new InsertionSort();
      default:
        return new AlgorithmEvents();
    }
  }
}
