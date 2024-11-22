---
title: 快速排序
order: 3
group:
  title: 排序算法
  order: 3
---

## 简介

快速排序简称**快排**,平均时间复杂度为O(nlogn),最坏的时间复杂度为O(n^2),是通过一趟排序,将数组分割成独立的两部分,其中一部分的所有数据比另外一部分的任意一个数都要小,然后在对这两部分使用同样的方法再次分割,直到不可分割为止

## 步骤

1. 将数组中的一个数作为基准(我是以数组中间的值作为基准的)

2. 比基准小的放在基准的左边,比基准大的放在基准的右边,如果和基准相同,那个随便放那边都可以

   1. 从左边(l)开始找,找到比基准的的数,从右边(r)开始找,找到比基准小的数,将这两个数交换

   2. 当l大于等于r时,进行第3步,否则回到第2步的步骤1继续查找

3. 比基准小的数都在左边,将这些数看成一个数组,重第一步开始执行,比基准大的数都在右边,将这些数看成一个数组,重复第一步开始执行

## 代码实现

1. 快速排序算法的实现

```java
package com.hzj.sort;

import java.util.Arrays;

/**
 * 快速排序
 * @author hzj
 */
public class QuickSort {


    /**
     * 快速排序
     * @param arr 排序数组
     * @param left 最左边
     * @param right  最右边
     */
    public void quickSort(int[] arr, int left, int right) {
    	//如果左指针大于右指针,数组为空,数组的长度为1,都不需要继续进行
        if (left >= right || arr == null || arr.length <= 1) {
            return;
        }
        System.out.println("left = " + left + " right = " + right);
        //左指针
        int l = left;
        //右指针
        int r = right;
        //将排序数组中间的值作为基准
        int pivot = arr[(left + right) / 2];
        System.out.println("排序数组的中间值作为基准arr["+((left + right)/2)+"]  =  " + pivot);
        //临时变量
        int temp = 0;
        while (l <= r) {
            //从左边开始找,找到一个比pivot值大的数
            while (arr[l] < pivot) {
                l++;
            }

            //从右边开始找,找到一个比pivot值小的数
            while (arr[r] > pivot) {
                r--;
            }

            System.out.println("查找到arr["+l+"]" + "的值大于pivot");
            System.out.println("查找到arr["+r+"]" + "的值小于pivot");


            //如果左指正小于右指针,交换两边的值
            if (l < r) {
                temp = arr[l];
                arr[l] = arr[r];
                arr[r] = temp;
                l++;
                r--;
            } else {
                //如果左指针和右指针同时指向pivot,就退出
                //如果左指针指向pivot的右边,右指针指向pivot的左边,就退出
                break;
            }
            System.out.println("将arr["+(l - 1)+"]和arr["+(r + 1)+"]交换前");
            System.out.println(Arrays.toString(arr));
            System.out.println("将arr["+(l - 1)+"]和arr["+(r + 1)+"]交换后");
            System.out.println(Arrays.toString(arr));
        }

        if (l == r) {
            l++;
            r--;
        }

        System.out.println("l的值大于等于r的值此次排序结束");
        //将左边的进行排序,左递归
        quickSort(arr, left, r);
        //将右边的进行排序,右递归
        quickSort(arr, l, right);
    }
}

```

2. 编写测试类

```java
package com.hzj.sort;

import org.junit.jupiter.api.Test;

import java.util.Arrays;

/**
 * @author hzj
 */
class SortTest {

    @Test
    void testQuickSort() {
        QuickSort quickSort = new QuickSort();
        int[] arr = {1, 4, 8, 2, 55, 3, 4, 8, 6, 4, 0, 11, 34, 90, 23, 54, 77, 9, 2, 9, 4, 10};
        quickSort.quickSort(arr, 0, arr.length - 1);
        System.out.println("排序后的结果");
        System.out.println(Arrays.toString(arr));
    }
}

```
