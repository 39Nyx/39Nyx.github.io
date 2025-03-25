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
    this.notify(`开始选择排序, 数组内容为[${this.array.map(item => item.value).join(', ')}]`)
    for (let i = 0; i < n - 1; i++) {
      let pivotIndex = i;
      // 标记当前元素为pivot
      this.array[i].state = 'pivot'
      this.notify(`寻找第 ${i + 1} 个最小元素`);
      // 在未排序部分找到最小元素的索引
      for (let j = i + 1; j < n; j++) {
        this.array[j].state = 'comparing'
        // 比较元素和当前最小值, 并更新到最小索引
        if (await this.compare(j, pivotIndex)) {
          this.array[j].state = 'default'
        } else {
          this.array[pivotIndex].state = 'default'
          this.array[j].state = 'pivot'
          pivotIndex = j;
        }
      }
      // 如果找到了更小的元素，交换它们
      if (pivotIndex !== i) {
        this.notify(`找到最小元素${this.array[pivotIndex].value}, 和${this.array[i].value}交换`)
        await this.swap(i, pivotIndex);
        this.notify(`数组变为 [${this.array.map(item => item.value).join(', ')}]`)
      }

      // 标记已排序的元素
      this.array[i].state = 'sorted';
    }

    // 标记最后一个元素为已排序
    if (this.array.length > 0) {
      this.array[n - 1].state = 'sorted';
    }

    this.notify('选择排序完成');
  }
}
