import { ArrayElement, SortingState } from "../models/SortingAlgorithm";

export class AlgorithmEvents {
  private listeners: ((state: SortingState) => void)[] = [];
  array: ArrayElement[];
  private comparisons: number = 0;
  swaps: number = 0;
  private delay: number;
  constructor(initialArray: number[] = [], delay: number = 500) {
    this.array = initialArray.map(value => ({ value, state: 'default' }));
    this.delay = delay;
  }

  notify(message?: string) {
    const state: SortingState = {
      array: [...this.array],
      comparisons: this.comparisons,
      swaps: this.swaps,
      message
    };
    this.listeners.forEach(listener => listener(state));
  }

  subscribe(listener: (state: SortingState) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  getState(): SortingState {
    return {
      array: [...this.array],
      comparisons: this.comparisons,
      swaps: this.swaps
    };
  }

  /**
   * 设置数组的值
   * @param newArray
   */
  setArray(newArray: number[]) {
    this.array = newArray.map(value => ({ value, state: 'default' }));
    this.comparisons = 0;
    this.swaps = 0;
    this.notify('数组已更新');
  }

  /**
   * 等待执行
   * @param ms
   */
  async wait(ms: number = this.delay) {
    await new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * 比较 i 和 j 位置的元素的大小
   * @param i
   * @param j
   */
  async compare(i: number, j: number): Promise<boolean> {
    this.comparisons++;
    this.notify(`比较元素 ${this.array[i].value} 和 ${this.array[j].value}的大小`);
    await this.wait();

    return this.array[i].value > this.array[j].value;
  }

  /**
   * 交换 i 和 j 位置的元素, 并设置状态
   * @param i
   * @param j
   */
  async swap(i: number, j: number) {
    this.swaps++;
    this.array[i].state = 'swapping';
    this.array[j].state = 'swapping';
    await this.wait();

    const temp = this.array[i];
    this.array[i] = this.array[j];
    this.array[j] = temp;

    this.array[i].state = 'default';
    this.array[j].state = 'default';
    this.notify();
  }

  /**
   * 生成随机数组
   * @param size
   * @param min
   * @param max
   */
  generateRandomArray(size: number, min: number = 1, max: number = 100) {
    const newArray = Array.from({ length: size }, () =>
      Math.floor(Math.random() * (max - min + 1)) + min
    );
    this.setArray(newArray);
    return newArray;
  }


  /**
   * 设置动画延迟
   * @param ms
   */
  setDelay(ms: number) {
    this.delay = ms;
  }

  async sort() {
    // 子类实现具体的排序算法
  }

  /**
   * 切换基准元素动画
   */
  async togglePivotElementAnimation(index: number) {
    this.array[index].state = 'pivot';
    await this.wait(200);
    this.array[index].state = 'default';
    await this.wait(200);
    this.array[index].state = 'pivot';
    await this.wait(200);
    this.array[index].state = 'default';
    await this.wait(200);
    this.array[index].state = 'pivot';
  }
}
