import { AlgorithmEvents } from "39nyx/modules/Algorithms/algorithms/AlgorithmEvents";

export class InsertionSort extends AlgorithmEvents {
  constructor() {
    super();
  }

  async sort() {
    const n = this.array.length;
    // 第一个元素默认已排序
    if (n > 0) {
      this.array[0].state = 'sorted';
    }

    // 从第二个元素开始遍历
    for (let i = 1; i < n; i++) {
      const current = this.array[i].value;
      this.array[i].state = 'current';
      this.notify(`当前处理元素: ${current}`);
      await this.wait();

      // 寻找插入位置
      let j = i - 1;
      while (j >= 0 && this.array[j].value > current) {
        this.array[j].state = 'comparing';
        this.notify(`比较元素 ${this.array[j].value} 和 ${current}`);
        await this.wait();

        // 将大于当前元素的元素后移
        this.array[j + 1].value = this.array[j].value;
        this.array[j].state = 'sorted';
        this.swaps++;
        j--;
      }

      // 插入当前元素
      this.array[j + 1].value = current;
      this.array[j + 1].state = 'sorted';
      this.notify(`元素 ${current} 已插入到正确位置`);

      // 更新已排序部分的状态
      for (let k = 0; k <= i; k++) {
        this.array[k].state = 'sorted';
      }
      await this.wait();
    }

    this.notify('插入排序完成');
  }
}
