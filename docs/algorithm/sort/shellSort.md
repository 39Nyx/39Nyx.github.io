---
title: 希尔排序
order: 5
group:
  title: 排序算法
  order: 3
---

## 简介

要掌握希尔排序就要先掌握`插入排序`,其实就是进行多次插入排序

## 算法

1. 将排序数组(arr)以`arr.length/2^n`(n = 1, 2, 3, 4...)为步长进行分组

2. 将每组进行插入排序

3. 重复步骤1到2,直到步长等于0时结束

## 例子

以数组`arr = {8, 9, 1, 7, 2, 3, 5, 4, 6, 0}`为例子

1. 以`arr.length/2^1 = 10 / 2 = 5`为步长进行分组

分组后,每列为一组

```
8, 9, 1, 7, 2,
3, 5, 4, 6, 0
```

::: tip
还是在arr数组中,并不是一个二维数组
:::

2. 将每列进行插入排序

```
3, 5, 1, 6, 0,
8, 9, 4, 7, 2
```

此时`arr = {3, 5, 1, 6, 0, 8, 9, 4, 7, 2}`

3. 将数组以`arr.length/2^2 = 10 / 4 = 2`为步长进行分组

分组后
```
3, 5, 
1, 6, 
0, 8, 
9, 4, 
7, 2
```

4. 将每列进行插入排序

排序后

```
0, 2, 
1, 4, 
3, 5, 
7, 6, 
9, 8
```

此时`arr = {0, 2, 1, 4, 3, 5, 7, 6, 9, 8}`

5. 将数组以`arr.length/2^3 = 10 / 8 = 1`为步长进行分组

分组后

```
0, 
2, 
1, 
4,
3, 
5, 
7, 
6, 
9, 
8
```

6. 将每列进行插入排序

```
0,
1,
2,
3,
4,
5,
6,
7,
8,
9
```

此时`arr = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}`

## 代码实现

```java
package com.hzj.sort;

import java.util.Arrays;

/**
 * 希尔排序
 * @author hzj
 */
public class ShellSort {
    public void shellSort(int[] arr) {
        //保存插入的值
        int insertValue = 0;
        //保存插入的位置
        int insertIndex = 0;
        int len = arr.length;
        for (int step = len / 2; step > 0; step /= 2) {
            for (int i = step; i < len; i++) {
                insertValue = arr[i];
                insertIndex = i;
                for (int j = insertIndex - step; j >= 0; j-= step) {
                    //该元素小于排序数组中的元素
                    if (insertValue < arr[j]) {
                        //排序数组中的元素后移step位
                        arr[j + step] = arr[j];
                    } else {
                        break;
                    }
                    //将插入的位置往前移动step位
                    insertIndex -= step;
                }
                arr[insertIndex] = insertValue;
            }
            System.out.println("步长为 "+step+" 排序后数组的结果");
            System.out.println(Arrays.toString(arr));

        }
    }
}
```

::: tip
其实可以发现,步长越来越小,当步长为1时就是一次完整的插入排序,并且数组这是候数组基本是有序的,所以比一次由随机数组成的数组进行一次插入排序所需要的时间要短的多
:::

