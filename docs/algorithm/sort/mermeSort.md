---
title: 归并排序
order: 2
group:
  title: 排序算法
  order: 3
---

## 简介

归并排序就是将一个数组不断的分割,当不可分割时,在将分割的序列不断的合并,当全部合并完成之后数组也就有序了

## 算法

1. 将数组从中间分割,分割成左右两部分

2. 将左边部分从中间分割,分割成左右两部分,一直重复下去,直到不可分割为止

3. 将右边部分从中间分割,分割成左右两部分,一直重复下去,直到不可分割为止

4. 将分割成的左右两边进行合并,不断的合并,直到全部合并完成

## 例子

以数组`arr = {8, 4, 5, 7, 1, 3, 6, 2}`为例子

1. 将数组从中间分割,分割成左右两部分

```
8, 4, 5, 7,(左)
1, 3, 6, 2(右)
```

2. 将左边(`8, 4, 5, 7,`)再进行分割

```
8, 4, (左)
5, 7,(右)
1, 3, 6, 2(右)
```

3. 将左边(`8, 4, `)再进行分割

```
8, (左)
4, (右)
5, 7,(右)
1, 3, 6, 2(右)
```

4. 这时左(`8`)和右(`4`)都不可在分割,将右(`5, 7`)进行分割

```
8, (左)
4, (右)
5, (左)
7,(右)
1, 3, 6, 2(右)
```

5. 按照规律一直分割下去

```
8, (左1-1)
4, (右1-1)
5, (左1-2)
7, (右1-2)
1, (左1-3) 
3, (右1-3)
6, (左1-4)
2  (右1-4)
```

6. 全部分割完成之后将左右(左1-i和右1-i)进行合并

```
4, 8 (左 2-1)
5, 7 (右 2-1)
1, 3 (左 2-2)
2, 6 (右 2-2)

```

7, 在次进行合并

```
4, 5, 7, 8 (左 3-1)
1, 2, 3, 6 (右 3-1)
```

8 一直合并下去,直到全部合并完成

合并后的结果为

`1, 2, 3, 4, 5, 6, 7, 8`

## 代码实现

```java
package com.hzj.sort;

import java.util.Arrays;

/**
 * 归并排序
 * @author hzj
 */
public class MergeSort {

    public void mergeSort(int[] arr, int left, int right, int[] result) {
        if (left >= right) {
            return;
        }
        int mid = (left + right) / 2;
        System.out.println("分解后左边为[" + left + " ~ "+ mid +"]");
        System.out.println("分解后右边为[" + (mid + 1)+ " ~ "+ right +"]");
        //左递归进行分解
        mergeSort(arr, left, mid, result);
        //右递归进行分解
        mergeSort(arr, mid + 1, right, result);
        System.out.println("开始合并");
        //合并
        merge(arr, left, mid, right, result);
    }


    /**
     * 将两个数组进行合并
     * @param arr 需要合并的数组
     * @param left 左边有序序列的初始化索引
     * @param mid 右边有序序列的初始化索引
     * @param right 需要合并数组的最大索引
     * @param result 额外的数组,存放合并的数组
     */
    public void merge(int[] arr, int left, int mid, int right, int[] result) {
        System.out.print("数组arr左边的有序序列["+left + " ~ " + mid + "]");
        System.out.println("数组arr右边的有序序列["+(mid + 1) + " ~ " + right + "]");
        //左边有序序列的初始化索引
        int i = left;
        //右边有序序列的初始化索引
        int j = mid + 1;
        //两个有序序列的合并的个数
        int resultIndex = 0;
        //将两个数组进行合并,左边的全部合并完或者右边的全部合并完之后可以退出
        while (i <= mid && j <= right) {
            //按照从小到大依次放入合并数组中
            if (arr[i] < arr[j]) {
                result[resultIndex] = arr[i];
                i++;
            } else {
                result[resultIndex] = arr[j];
                j++;
            }
            resultIndex++;
        }

        //左边的还有数据,依次加入到合并数组中
        while (i <= mid) {
            result[resultIndex] = arr[i];
            resultIndex++;
            i++;
        }

        //右边的还有数据,依次加入到合并数组中
        while (j <= right) {
            result[resultIndex] = arr[j];
            resultIndex++;
            j++;
        }


        System.out.println("左边的有序序列和右边的有序序列合并后[0"+ " ~ " + (resultIndex - 1) +"]  " + Arrays.toString(result));
        System.out.println("将合并后的值copy个原数组之前  " + Arrays.toString(arr));
        //将合并后的值拷贝到原数组中
        resultIndex = 0;
        while (left <= right) {
            arr[left] = result[resultIndex];
            left++;
            resultIndex++;
        }
        System.out.println("将合并后的值copy个原数组之后  " + Arrays.toString(arr));


    }
}

```
