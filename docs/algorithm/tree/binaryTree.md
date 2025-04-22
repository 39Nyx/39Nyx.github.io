---
title: 二叉树
order: 2
group:
  title: 树
---

## 二叉树的定义

### 定义

二叉树(Binary Tree)是n(n >= 0)个节点的有限集合, 该集合或者为空集(称为空二叉树), 或者由一个根节点和两颗互不相交的、分别称为根节点的左子树和右子树的二叉树组成.


### 二叉树的特点

- 每个节点最多只有两颗子树，所以二叉树不存在度大于2的节点，注意不是只有两颗子树，而是最多两颗子树
- 左子树和右子树是由顺序的，次序不能任意颠倒
- 即使树中某节点只有一棵子树，也要区分它是左子树还是右子树

### 二叉树的五种基本形态

- 空二叉树
- 只有一个根节点

```jsx
import { DendrogramTree } from '39nyx'

export default () => {
  const treeData = {
    id: "1",
  }
  return (
    <div>
      <DendrogramTree data={treeData}></DendrogramTree>
    </div>
  )
}
```

- 根节点只有左子树

```jsx
import { DendrogramTree } from '39nyx'

export default () => {
  const treeData = {
    id: "1",
    children: [
      {
        id: "2",
      },
    ],
  }
  return (
    <div>
      <DendrogramTree data={treeData}></DendrogramTree>
    </div>
  )
}
```

- 根节点只有右子树
- 根节点既有左子树又有右子树



### 节点结构

每个节点包含三部分

- 数据域: 存储节点的值
- 左指针: 指向左子节点
- 右指针: 指向右子节点

若子节点不存在, 则指针指向空(null)

### 层级关系

- 树的最顶层节点为根节点(Root)
- 没有子节点的节点称为叶子节点(Leaf Node)
- 其他节点称为内部节点(Internal Node)
- 
