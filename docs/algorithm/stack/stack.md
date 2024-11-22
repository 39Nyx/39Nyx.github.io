---
title: 栈
order: 2
group:
  title: 算法
  order: 2
---

## 介绍

栈有两种，一种是通过数组实现的，一种是通过链表实现的

栈的操作规则特别简单，`先进后出`

## 通过数组来实现一个栈

### 栈结构

因为栈是一种特殊的数组，只能访问栈顶元素，不能访问除了栈顶元素之外的元素，所以不提供成员变量的`get`和`set`方法

```java
package com.hzj.stack;

/**
 * 使用数组模拟栈
 * @author hzj
 */
public class ArrayStack {

    /**
     * 栈的最大存储空间
     */
    private int maxSize;

    /**
     * 用来存储栈
     */
    private int[] stack;

    /**
     * 栈顶
     */
    private int top;

    public ArrayStack() {
    }

    public ArrayStack(int maxSize) {
        this.maxSize = maxSize;
        this.top = -1;
        this.stack = new int[maxSize];
    }
}
```

一个简单的栈就实现了，但是这样子是不能使用的，还需要提供一些方法

#### 入栈

将栈顶向上移动一位，并将元素压人栈中

```java
/**
 * 入栈
 * @param value 插入的值
 */
public void push(int value) {
	//判断栈是否满了
    if (isFull()) {
        System.out.println("栈满了");
        return;
    }
    top++;
    stack[top] = value;
}
```

由于是通过数组来实现一个栈，所以需要判断栈是否满了，所以提供一个判断栈满的方法

```java
/**
 * 判断栈满
 * @return true表示栈满,false表示栈未满
 */
public boolean isFull() {
    if (maxSize == top + 1) {
        return true;
    }
    return false;
}
```

#### 出栈

先将栈顶元素赋值给一个临时变量(value)，并将栈顶向下移动一位，在将临时变量(value)返回

```java
/**
 * 出栈
 * @return 出站的结果
 */
public int pop() {
	//在出栈的时候判断栈是否空了
    if (isEmpty()) {
        throw new RuntimeException("栈为空");
    }
    int value = stack[top];
    top--;
    return value;
}
```

在出栈的时候需要判断栈是否空了,然后在出栈

```java
/**
 * 判断栈是否为空
 * @return true表示空, false表示不是空
 */
public boolean isEmpty() {
    if (top == -1) {
        return true;
    }
    return false;
}
```

::: tip
在出栈的时候，栈顶元素其实并没有被删除，还存在数组中，但是由于是通过栈顶(top)来操作的，所以下标大于top的值并不能够访问，所以可以看做删除了，并且在入栈的时候会把值覆盖掉，所以不会影响使用，但真正的情况并没有被删除
:::
