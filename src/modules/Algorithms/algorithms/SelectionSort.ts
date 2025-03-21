import { AlgorithmEvents } from "./AlgorithmEvents";

export class SelectionSort extends AlgorithmEvents {
  constructor(initialArray: number[] = [], delay: number = 500) {
    super(initialArray, delay);
  }

  /**
   * 选择排序算法
   */
  async sort() {
    const n = this.array.length;
    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      this.array[i].state = 'comparing';
      this.notify(`寻找第 ${i + 1} 个最小元素`);

      // 在未排序部分找到最小元素
      for (let j = i + 1; j < n; j++) {
        this.array[j].state = 'comparing';
        this.notify(`比较元素 ${this.array[j].value} 和当前最小值 ${this.array[minIndex].value}`);
        await this.wait();

        if (await this.compare(j, minIndex)) {
          this.array[minIndex].state = 'default';
          minIndex = j;
        } else {
          this.array[j].state = 'default';
        }
      }
      // 如果找到了更小的元素，交换它们
      if (minIndex !== i) {
        await this.swap(i, minIndex);
      }

      // 标记已排序的元素
      this.array[i].state = 'sorted';
      this.notify(`第 ${i + 1} 个最小元素已放置到正确位置`);
    }

    // 标记最后一个元素为已排序
    if (this.array.length > 0) {
      this.array[n - 1].state = 'sorted';
    }

    this.notify('选择排序完成');
  }
}
