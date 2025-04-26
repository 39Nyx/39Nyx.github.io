---
title: 插入排序
order: 2
group:
  title: 排序算法
  order: 3
---

## 规则

将数组分为两段,一段为有序序列,一段为无序序列,每次将无序序列的值插入到有序序列的合适位置

## 算法

1. 从第一个元素开始,该元素可以认为已经排序

2. 取出下一个元素,在已排序的序列中**从后往前**扫描

3. 如果排序序列中的元素大于该元素(insertValue),那么将排序序列中的元素向后移动一位

4. 重复步骤3,直到找到该元素(insertValue)小于等于排序序列中的元素,并记录索引(insertIndex)

5. 将该元素(insertValue)赋值给索引为insertIndex的元素

6. 重复步骤2到5

## 例子

以数组{6, 5, 3, 1, 8, 7, 2, 4}

1. 从第一个元素(6)开始,该元素是有序的

2. 将元素`5`取出,在排序的序列`{6}`从后往前扫描

3. `6`比`5`大,6往后移动一位,因为到了最前面,将`5`放在第一位

4. 将元素`3`取出,在排序的序列`{5, 6}`从后往前扫描

5. `6`比`3`大,`6`往后移动一位,`5`比`3`大,`5`往后移动一位,因为到了最前面,将`3`放到第一位

6. 依次类推

## 可视化

```jsx
import { InsertionSort } from '39nyx';

export default () => <InsertionSort />
```

## 代码实现

:::code-group

```javascript [js]
let a = 10
```


```java [java]
package com.hzj.sort;

/**
 * 插入排序
 * @author hzj
 */
public class InsertSort {

    public void insertSort(int[] arr) {
        //保存插入的值
        int insertValue = 0;
        //保存插入的位置
        int insertIndex = 0;
        int len = arr.length;
        for (int i = 1; i < len; i++) {
            insertValue = arr[i];
            insertIndex = i;
            for (int j = insertIndex - 1; j >= 0; j--) {
                //该元素小于排序数组中的元素
                if (insertValue < arr[j]) {
                    //排序数组中的元素后移一位
                    arr[j + 1] = arr[j];
                } else {
                    break;
                }
                //将插入的位置往前移动
                insertIndex--;
            }
            arr[insertIndex] = insertValue;
        }
    }
}
```

```python [python]
def insert_sort(arr):
    for i in range(1, len(arr)):
        insert_value = arr[i]
        insert_index = i
        for j in range(insert_index - 1, -1, -1):
            if insert_value < arr[j]:
                arr[j + 1] = arr[j]
            else:
                break
        arr[insert_index] = insert_value
```
:::
