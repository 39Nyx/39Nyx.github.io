---
title: nth
order: 3
group:
  title: 伪类
---

## nth-child

### 语法

`:nth-child()`以一个参数来描述匹配兄弟元素列表中元素索引的模式。元素索引从 1 开始。

```css
:nth-child(<nth> [of <complex-selector-list>]?) {
  /* ... */
}
```

### 关键字值

- `odd`：匹配奇数序号的元素, 1、3、5、7、9 等。
- `even`：匹配偶数序号的元素, 2、4、6、8、10 等。

使用`odd`和`even`关键字可以快速的选择奇数或偶数序号的元素。

```css
/* 选择所有奇数位置的元素 */
tr:nth-child(odd) {
  background: #eee;
}

/* 选择所有偶数位置的元素 */
tr:nth-child(even) {
  background: #fff;
}
```

### 函数符号

- `<An+B>`: 表示元素在兄弟元素列表中的位置是 `An+B` 模式的元素，其中 `n` 为正整数或 `0`，`A` 和 `B` 为整数，且 `A` 不为 `0`。其中, `A` 是整数步长, `B` 是整数偏移量, `n`是从 0 开始的所有非负整数

```css
/* 选择每第3个元素（3,6,9,...） */
li:nth-child(3n) {
  color: green;
}

/* 选择从第2个开始（2,3,4,5,6,7,8,...） */
.nav-item:nth-child(n+2) {
  border: 1px solid black;
}

/* 选择前5个元素 */
p:nth-child(-n+5) {
  font-weight: bold;
}
```

`.nav-item:nth-child(n+2)`详细解释

- n 是一个变量，代表从 0 开始递增的整数（0, 1, 2, 3, ...）。
- n+2 表示：
  - 当 n=0 → 第 2 个元素（0+2=2）
  - 当 n=1 → 第 3 个元素（1+2=3）
  - 当 n=2 → 第 4 个元素（2+2=4）
  - 以此类推……
- 所以，这个选择器会匹配：
- 第 2 个 `.nav-item`
- 第 3 个 `.nav-item`
- 第 4 个 `.nav-item`
- ...所有后续的 `.nav-item`

```html
<ul class="nav">
  <li class="nav-item">Item 1</li>  <!-- 不会被选中 -->
  <li class="nav-item">Item 2</li>  <!-- 被选中（第2个） -->
  <li class="nav-item">Item 3</li>  <!-- 被选中（第3个） -->
  <li class="nav-item">Item 4</li>  <!-- 被选中（第4个） -->
</ul>
```
