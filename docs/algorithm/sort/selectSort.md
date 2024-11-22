---
title: 选择排序
order: 4
group:
  title: 排序算法
  order: 3
---

## 规则

将未排序的数组中找到最小的值,将值放在起始位置,然后在剩余未排序的数组中找到最小值,放在以排序数组的末尾,以此类推,知道所有的元素排序完毕

## 例子

以数组 {8, 5, 2, 6, 9, 3, 1, 4, 0,7}为例

1. 将数组从0到10进行遍历,在数组中找到最小值(0),将最小值与第一个元素(8)交换

2. 将数组从1到10进行遍历,在数组中找到最小值(1),将最小值与第二个元素(5)交换

3. 将数组从2到10进行遍历,在数组中找到最小值(2),最小值已经在第三个位置,无需进行交换

4. 将数组从3到10进行遍历,在数组中找到最小值(3),将最小值与第四个元素(6)进行交换

5. 以此类推

## 图解

图片来源(维基百科)

![](./img/Selection-Sort-Animation.gif)

## 代码实现

```java
package com.hzj.sort;

/**
 * 选择排序
 * @author hzj
 */
public class SelectSort {

    public void selectSort(int[] arr) {
        //最小值的下标
        int minIndex = 0;
        //最小值
        int min = 0;
        int len = arr.length;
        for (int i = 0; i < len - 1; i++) {
            //最小值的索引
            minIndex = i;
            //假定未排序数组的第一个是最小值
            min = arr[i];
            for (int j = i + 1; j < len; j++) {
                //如果发现还小的值
                if (min > arr[j]) {
                    //记住最小的值
                    min = arr[j];
                    //记住最小值的索引
                    minIndex = j;
                }
            }
            //如果未排序数组的第一个值就是最小值,就无需交换,否则需要交换
            if (minIndex != i) {
                //未排序数组的第一个值与最小值进行交换
                arr[minIndex] = arr[i];
                arr[i] = min;
            }
        }
    }
}
```
