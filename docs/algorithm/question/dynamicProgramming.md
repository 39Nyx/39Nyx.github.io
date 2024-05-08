---
title: 动态规划
order: 1
group:
  title: 算法
  order: 2
---

## 动态规划

动态规划（Dynamic
Programming，DP）是一种在数学、计算机科学、经济学、管理科学、生物学、控制科学、优化理论、人工智能、计算机图形学、电子电路设计、通信工程、控制工程、工程经济学、数理统计、地理信息科学、信息安全、计算数学等领域中使用的，用来解决复杂问题的一种方法。

动态规划的基本思想是将复杂问题分解成子问题，先求解子问题，再组合子问题的解得到原问题的解。动态规划常用于求解最优化问题，即寻找最优解。

动态规划的步骤：

1. 定义子问题：将原问题分解成若干个子问题，每个子问题都与原问题的某一部分相关。

2. 递归定义子问题的解：用递归公式定义每个子问题的解，即用子问题的解来定义原问题的解。

3. 计算子问题的解：用自底向上的方法计算出每个子问题的解，即先求解子问题的解，再组合子问题的解得到原问题的解。

4. 存储子问题的解：将子问题的解存储起来，避免重复计算。

5. 利用子问题的解：利用子问题的解来求解原问题。

动态规划的优点：

1. 最优子结构：动态规划解决的问题具有最优子结构，即局部最优解能决定全局最优解。

2. 重叠子问题：动态规划通过存储子问题的解来避免重复计算，因此可以节省时间。

3. 状态转移方程：动态规划的状态转移方程往往是递归公式，易于理解和实现。

4. 时间复杂度：动态规划的时间复杂度与问题的规模有关，是一种线性时间复杂度。

## 相关题目

- [不同路径](https://leetcode-cn.com/problems/unique-paths/)
- [不同路径 II](https://leetcode-cn.com/problems/unique-paths-ii/)
- [最小路径和](https://leetcode-cn.com/problems/minimum-path-sum/)
- [爬楼梯 II](https://leetcode-cn.com/problems/climbing-stairs-ii/)
- [买卖股票的最佳时机](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)
- [买卖股票的最佳时机 II](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/)
- [买卖股票的最佳时机 III](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/)
- [最长递增子序列](https://leetcode-cn.com/problems/longest-increasing-subsequence/)
- [最长公共子序列](https://leetcode-cn.com/problems/longest-common-subsequence/)
- [编辑距离](https://leetcode-cn.com/problems/edit-distance/)
- [打家劫舍](https://leetcode-cn.com/problems/house-robber/)
- [打家劫舍 II](https://leetcode-cn.com/problems/house-robber-ii/)
- [打家劫舍 III](https://leetcode-cn.com/problems/house-robber-iii/)
- [最大子序和](https://leetcode-cn.com/problems/maximum-subarray/)
- [最大子序和 II](https://leetcode-cn.com/problems/maximum-subarray-ii/)
- [最大子序和 III](https://leetcode-cn.com/problems/maximum-subarray-iii/)
- [最大正方形](https://leetcode-cn.com/problems/maximal-square/)
- [不同岛屿的数量](https://leetcode-cn.com/problems/number-of-islands/)
- [岛屿数量](https://leetcode-cn.com/problems/number-of-islands-ii/)
- [最长回文子串](https://leetcode-cn.com/problems/longest-palindromic-substring/)
- [最长回文子序列](https://leetcode-cn.com/problems/longest-palindromic-subsequence/)
- [最长公共子串](https://leetcode-cn.com/problems/longest-common-substring/)
- [最长公共序列](https://leetcode-cn.com/problems/longest-common-subsequence/)
- [最长公共前缀](https://leetcode-cn.com/problems/longest-common-prefix/)
- [最长回文子序列](https://leetcode-cn.com/problems/longest-palindromic-subsequence/)

## 简单

### [爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/)

假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

**示例 1：**

```
输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
```

**示例 2：**

```
输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶
```

**提示：**

- `1 <= n <= 45`

## 进阶题目

## 困难

### [摘樱桃](https://leetcode-cn.com/problems/cherry-pickup/)

```tsx
export default () => {
  const cherryPickup = (grid: number[][]): number => {
    const n = grid.length;
    const f = new Array(n * 2 - 1)
      .fill(0)
      .map(() =>
        new Array(n).fill(0).map(() => new Array(n).fill(-Number.MAX_VALUE)),
      );
    f[0][0][0] = grid[0][0];
    // k是走过的步数, 从(0, 0) 走到(n-1, n-1)需要走 2n - 1步
    for (let k = 1; k < n * 2 - 1; k++) {
      for (let x1 = Math.max(k - n + 1, 0); x1 <= Math.min(k, n - 1); ++x1) {
        const y1 = k - x1;
        if (grid[x1][y1] === -1) {
          continue;
        }
      }
    }
    console.log(f);
  };
  const input = [
    [0, 1, -1],
    [1, 0, -1],
    [1, 1, 1],
  ];
  const result = cherryPickup(input);
  return <div>输出：{result || ''}</div>;
};
```
