---
title: 有序表查找
order: 2
group:
  title: 查找算法
  order: 2
---

## 二分查找

二分查找是一种在有序数组中查找特定元素的算法。它通过比较数组中间元素与查找元素的大小，将搜索范围缩小为一半，直到找到或确定元素不存在。

### 步骤

1. 首先，确定数组的中间元素的索引。

2. 比较数组中间元素与查找元素的大小。

3. 如果中间元素等于查找元素，则查找成功。

4. 如果中间元素大于查找元素，则搜索左半部分。

5. 如果中间元素小于查找元素，则搜索右半部分。

6. 重复步骤 2-5，直到找到或确定元素不存在。

### 时间复杂度

二分查找的时间复杂度为 O(log n)，其中 n 为数组的长度。

### 代码实现

:::code-group

```typescript [ts]
/**
 *
 * @param list 需要查找的数组
 * @param target 需要查找的元素
 * @return 如果找到，返回元素的索引；否则返回-1
 */
function binarySearchBasic(list: number[], target: number): number {
  let left = 0;
  let right = list.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (list[mid] === target) {
      // 找到目标元素
      return mid;
    } else if (list[mid] < target) {
      // 目标元素在右半部分，更新左边界，继续查找
      // 注意mid+1，否则会死循环,当left + 1 = right或者left = right 时候, mid = (left + right) / 2 = left
      left = mid + 1;
    } else {
      // 目标元素在左半部分
      // 注意mid-1，否则会死循环, 当left = right 时候, mid = (left + right) / 2 = right
      right = mid - 1;
    }
  }
  return -1;
}

// Test
const list = [1, 3, 5, 7, 9];
const target = 5;
const index = binarySearchBasic(list, target);
console.log(index); // Output: 2
```

```javascript [js]
/**
 *
 * @param list 需要查找的数组
 * @param target 需要查找的元素
 * @return {number} 如果找到, 返回元素的索引；否则返回-1
 */
function binarySearchBasic(list, target) {
  let left = 0;
  let right = list.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (list[mid] === target) {
      // 找到目标元素
      return mid;
    } else if (list[mid] < target) {
      // 目标元素在右半部分，更新左边界，继续查找
      // 注意mid+1，否则会死循环,当left + 1 = right或者left = right 时候, mid = (left + right) / 2 = left
      left = mid + 1;
    } else {
      // 目标元素在左半部分
      // 注意mid-1，否则会死循环, 当left = right 时候, mid = (left + right) / 2 = right
      right = mid - 1;
    }
  }
  return -1;
}

// Test
const list = [1, 3, 5, 7, 9];
const target = 5;
const index = binarySearchBasic(list, target);
console.log(index); // Output: 2
```

```java [java]
import org.junit.Assert;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;

public class TestBinarySearch {
    /**
     * @param list   需要查找的数组
     * @param target 需要查找的元素
     * @return 如果找到，返回元素的索引；否则返回-1
     */
    public static int binarySearchBasic(int[] list, int target) {
        int left = 0;
        int right = list.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (list[mid] == target) {
                // 找到目标元素
                return mid;
            } else if (list[mid] < target) {
                // 目标元素在右半部分，更新左边界，继续查找
                // 注意mid+1，否则会死循环,当left + 1 = right或者left = right 时候, mid = (left + right) / 2 = left
                left = mid + 1;
            } else {
                // 目标元素在左半部分
                // 注意mid-1，否则会死循环, 当left = right 时候, mid = (left + right) / 2 = right
                right = mid - 1;
            }
        }
        return -1;
    }

    @Test
    @DisplayName("TestBinarySearch Basic Test")
    public void testBinarySearchBasic() {
        int[] list = {1, 3, 5, 7, 9};
        int target = 5;
        int index = binarySearchBasic(list, target);
        Assert.assertEquals(2, index);
    }
}

```

:::
