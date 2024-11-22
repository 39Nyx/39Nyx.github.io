---
title: 树的遍历
order: 3
group:
  title: 树
  order: 2
---

## 简单树

```javascript
class Tree {
    data: number;
    children: Tree[]
}
```

### 广度优先遍历

```javascript
function levelTraverse(tree: Tree) {
    if (!tree) {
        return;
    }
    const queue: any = [];
    queue.push(tree)
    while (queue.length > 0) {
        const node: Tree = queue.shift();
        console.log(node.data)
        if (node.children && node.children.length > 0) {
            for (let i = 0; i < node.children.length; i++) {
                queue.push(node.children[i])
            }
        }
    }
}
```

### 深度优先遍历

```javascript
function deepTraverse(tree: Tree) {
    if (!tree) {
        return
    }
    const stack = []
    stack.push(tree)
    while (stack.length > 0) {
        const node = stack.pop()
        console.log(node.data)
        if (node.children && node.children.length > 0) {
            for (let i = 0; i < node.children.length; i++) {
                stack.push(node.children[i])
            }
        }
    }
}
```

```javascript
const tree: Tree = {
    data: 1,
    children: [
        {
            data: 2,
            children: [
                {
                    data: 4,
                    children: []
                },
                {
                    data: 5,
                    children: [
                        {
                            data: 7,
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            data: 3,
            children: [
                {
                    data: 6,
                    children: []
                }
            ]
        }
    ]
}

levelTraverse(tree)
console.log("======================")
deepTraverse(tree)
```

## 二叉树遍历

### 前序遍历

如果树是空的,那么直接返回，否则先访问根节点，然后前序遍历左子树，然后在前序遍历右子树

如下图所示，遍历顺序为`FBADCEGIH`

![二叉树前序遍历图](https://hezhijian.oss-cn-beijing.aliyuncs.com/learning/655599920182734848/1659359648365/%E4%BA%8C%E5%8F%89%E6%A0%91%E5%89%8D%E5%BA%8F%E9%81%8D%E5%8E%86%E5%9B%BE.svg)


```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(data, left, right) {
 *     this.val = (val===undefined ? 0 : data)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 前序遍历
 * @param {TreeNode} root
 */
const preOrderTraversal = function(root) {
  // 树为空，直接返回
  if (root === undefined || root === null) {
    return
  }
  // 访问根节点
  console.log(root.data);
  // 前序遍历左子树
  preOrderTraversal(root.left);
  // 前序遍历右子树
  preOrderTraversal(root.right)
};

const tree = {
  data: 'F',
  left: {
    data: 'B',
    left: {
      data: 'A'
    },
    right: {
      data: 'D',
      left: {
        data: 'C'
      },
      right: {
        data: 'E'
      }
    }
  },
  right: {
    data: 'G',
    right: {
      data: 'I',
      left: {
        data: 'H'
      }
    }
  }
}

preOrderTraversal(tree)
```

1. 访问根节点

2. 遍历左子树，将左子树当成一颗树，再次递归进行根，左，右的遍历

3. 遍历右子树，将右子树当成一颗树，再次递归进行根，左，右的遍历

### 中序遍历

如果树是空的，那么直接返回，否则先中序遍历左子树，然后访问根节点，然后在中序遍历右子树

如下图所示，遍历顺序为 `ABCDEFGHI`

![二叉树中序遍历图](https://hezhijian.oss-cn-beijing.aliyuncs.com/learning/655599920182734848/1659359648365/%E4%BA%8C%E5%8F%89%E6%A0%91%E4%B8%AD%E5%BA%8F%E9%81%8D%E5%8E%86%E5%9B%BE.svg)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(data, left, right) {
 *     this.val = (val===undefined ? 0 : data)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 中序遍历
 * @param {TreeNode} root
 */
const inOrderTraversal = function (root) {
  // 树为空，直接返回
  if (root === undefined || root === null) {
    return
  }
  // 中序遍历左子树
  inOrderTraversal(root.left);
  // 访问根节点
  console.log(root.data);
  // 中序遍历右子树
  inOrderTraversal(root.right);
}

const tree = {
  data: 'F',
  left: {
    data: 'B',
    left: {
      data: 'A'
    },
    right: {
      data: 'D',
      left: {
        data: 'C'
      },
      right: {
        data: 'E'
      }
    }
  },
  right: {
    data: 'G',
    right: {
      data: 'I',
      left: {
        data: 'H'
      }
    }
  }
}

inOrderTraversal(tree);
```

### 后序遍历

如果树是空的，那么直接返回，否则先后序遍历左子树，然后后序遍历右子树，然后访问根节点

如下图所示，遍历顺序为 `ACEDBHIGF`

![二叉树后序遍历图](https://hezhijian.oss-cn-beijing.aliyuncs.com/learning/655599920182734848/1659359648365/%E4%BA%8C%E5%8F%89%E6%A0%91%E5%90%8E%E5%BA%8F%E9%81%8D%E5%8E%86%E5%9B%BE.svg)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(data, left, right) {
 *     this.val = (val===undefined ? 0 : data)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 后序遍历
 * @param {TreeNode} root
 */
const postOrderTraversal = function (root) {
  if (root === undefined || root === null) {
    return
  }
  // 后序遍历左子树
  postOrderTraversal(root.left);
  // 后序遍历右子树
  postOrderTraversal(root.right);
  // 访问根节点
  console.log(root.data);
}

const tree = {
  data: 'F',
  left: {
    data: 'B',
    left: {
      data: 'A'
    },
    right: {
      data: 'D',
      left: {
        data: 'C'
      },
      right: {
        data: 'E'
      }
    }
  },
  right: {
    data: 'G',
    right: {
      data: 'I',
      left: {
        data: 'H'
      }
    }
  }
}

postOrderTraversal(tree);
```

## 层次遍历

如果树是空的，那么直接返回，否则从第一层开始，从上而下遍历，如果在同一层中，按照从左到右的方式遍历。层次遍历也叫广度优先遍历; 遍历的时候可以借助队列。

如下图所示，遍历顺序为 `FBGADICEH`

![二叉树层次遍历图](https://hezhijian.oss-cn-beijing.aliyuncs.com/learning/655599920182734848/1659359648365/%E4%BA%8C%E5%8F%89%E6%A0%91%E5%B1%82%E6%AC%A1%E9%81%8D%E5%8E%86%E5%9B%BE.svg)

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(data, left, right) {
 *     this.val = (val===undefined ? 0 : data)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 层次遍历
 * @param {TreeNode} root
 */
const levelTraversal = function (root) {
  // 将树放入队列中
  const queue = [root];
  while (queue.length > 0) {
    // 第一个出队列
    const node = queue.shift();
    console.log(node.data);
    // 存在左子树，将左子树入队
    if (node.left) {
      queue.push(node.left);
    }
    // 存在右子树，将右子树入队
    if (node.right) {
      queue.push(node.right);
    }
  }
}

const tree = {
  data: 'F',
  left: {
    data: 'B',
    left: {
      data: 'A'
    },
    right: {
      data: 'D',
      left: {
        data: 'C'
      },
      right: {
        data: 'E'
      }
    }
  },
  right: {
    data: 'G',
    right: {
      data: 'I',
      left: {
        data: 'H'
      }
    }
  }
}

levelTraversal(tree);
```

下面将层次遍历稍微改一下，将每层都放入一个数组中，可以看的更加清楚，当然，这种只是对层次遍历对一种运用

```javascript
[
    ['F'],
    ['B', 'G'],
    ['A', 'D', 'I'],
    ['C', 'E', 'H']
]
```

```javascript
/**
 * 分层的层次遍历
 * @param root
 */
const layeredLevelTraversal = function (root) {
  // 将树放入队列中
  let queue = [root];
  // 存储下一层对队列
  let nextLevelQueue = [];
  const result = [];
  while (queue.length > 0) {
    // 当前层当值
    const currentLevel = [];
    // 对这个队列进行遍历，将左子树和右子树放入下一层队列保存起来
    while (queue.length > 0) {
      const node = queue.shift();
      currentLevel.push(node.data);
      if (node.left) {
        nextLevelQueue.push(node.left);
      }
      if (node.right) {
        nextLevelQueue.push(node.right);
      }
    }
    // 获取当前层的所有值
    result.push(currentLevel);
    // 当前队列遍历完成之后，将下一层的队列给queue，然后下一层队列置空
    queue = nextLevelQueue;
    nextLevelQueue = [];
  }
  console.log(result);
}

const tree = {
  data: 'F',
  left: {
    data: 'B',
    left: {
      data: 'A'
    },
    right: {
      data: 'D',
      left: {
        data: 'C'
      },
      right: {
        data: 'E'
      }
    }
  },
  right: {
    data: 'G',
    right: {
      data: 'I',
      left: {
        data: 'H'
      }
    }
  }
}

layeredLevelTraversal(tree);
```
