---
title: 链表
order: 3
group:
  title: 链表
  order: 1
---

## 目标

1. 通过链表将英雄信息存储起来

2. 英雄信息包括英雄的编号(no),英雄的名字(name)，英雄的昵称(nickName)

3. 实现增加英雄(添加都链表的最后)、按照编号新增英雄(从小到大)、通过编号删除英雄、修改英雄

## 单向链表 

### 目录结构

```
src
└── com
    └── hzj
        └── linklist
            ├── HeroNode.java
            └── LinkList.java
```

### 代码实现

1. 定义节点

一共有四个成员变量，前三个`no`,`name`,`nickName`称为链表的数据域，`next`称为链表的指针域

```java
package com.hzj.linklist;

/**
 * 英雄节点
 * @author hzj
 */
public class HeroNode {
    /**
    * 编号
    */
    private int no;
    /**
    * 名字
    */
    private String name;
    /**
    * 昵称
    */
    private String nickName;
    /**
    * 下一个节点
    */
    private HeroNode next;

    public HeroNode() {
    }

    public HeroNode(int no, String name, String nickName) {
        this.no = no;
        this.name = name;
        this.nickName = nickName;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public HeroNode getNext() {
        return next;
    }

    public void setNext(HeroNode next) {
        this.next = next;
    }

    /**
     * next没有输出
     * @return HeroNode的内容
     */
    @Override
    public String toString() {
        return "HeroNode{" +
                "no=" + no +
                ", name='" + name + '\'' +
                ", nickName='" + nickName + '\'' +
                '}';
    }
}

```

2. 定义链表

链表有`带头节点`的链表，也有`不带头节点`的链表，这里定义的是带头结点的链表

**插入到链表的最后**:需要一个辅助指针(temp)，从头节点开始，通过辅助指针遍历到链表的最后，然后然辅助指针(temp)的next域指向需要插入的节点

**通过编号从小到达插入**：从小到达的插入，只需要插入的数据(heroNode)的`no`小于链表节点的`no`就在这个节点的前面进行插入,需要一个辅助指针(temp)指向这个节点的前一个节点，即在temp的后面进行插入

**删除链表**:删除链表需要找到删除链表的前一个节点，不能直接找到删除的节点进行删除，也就是不能够自我删除

**修改节点**:通过辅助指针(temp)指向头结点的next域，找到需要修改的节点进行修改

```java
package com.hzj.linklist;

/**
 * 链表
 * @author hzj
 */
public class LinkList {

    private HeroNode header;

    public LinkList() {
        this.header = new HeroNode();
    }

    public HeroNode getHeader() {
        return header;
    }

    public void setHeader(HeroNode header) {
        this.header = header;
    }

    /**
     * 往链表的末尾中添加一个节点
     * @param heroNode 节点
     */
    public void push(HeroNode heroNode) {
        //头节点不能移动，需要使用一个辅助变量来遍历
        HeroNode temp = header;
        //移动到最后一位
        while (temp.getNext() != null) {
            temp = temp.getNext();
        }
        //将最后一位的指向该值
        temp.setNext(heroNode);
    }

    /**
     * 通过编号插入数据,从小到大,并且不能有重复的编号，如果有，给出相应的提示
     * 需要找到插入节点的前一个节点，与temp的下一个节点的编号进行比较，不要与temp的编号进行比较
     * @param heroNode 插入的节点
     */
    public void addByNo(HeroNode heroNode) {
        HeroNode temp = header;
        //标记是否有相同的编号,false表示没有相同的编号
        boolean flag = false;
        while (temp.getNext() != null) {
            if (heroNode.getNo() < temp.getNext().getNo()) {
                break;
            } else if (heroNode.getNo() == temp.getNext().getNo()) {
                flag = true;
                break;
            }
            temp = temp.getNext();
        }
        //为true表示有相同的编号
        if (flag) {
            System.out.println("编号" + heroNode.getNo() + "已存在，不能加入");
        } else {
            /*
            为false有两种情况
                1. 要插入的值的编号小于temp的下一个节点的编号,跳出了while循环
                2. temp的下一个节点为空，white循环结束了
             */
            heroNode.setNext(temp.getNext());
            temp.setNext(heroNode);
        }

    }

    /**
     * 修改英雄信息
     * @param heroNode 修改后的节点
     */
    public void update(HeroNode heroNode) {
        if (header.getNext() == null) {
            System.out.print("链表为空，不能进行修改");
        }
        HeroNode temp = header.getNext();
        //标记是否找到该英雄
        boolean flag = false;
        while (temp != null) {
            if (temp.getNo() == heroNode.getNo()) {
                //找到了，将flag改为true
                flag = true;
                break;
            }
            temp = temp.getNext();
        }
        //找到了，修改值
        if (flag) {
            temp.setName(heroNode.getName());
            temp.setNickName(heroNode.getNickName());
        } else {
            System.out.println("需要修改的英雄编号" + heroNode.getNo() + "不存在");
        }
    }

    /**
     * 通过编号删除英雄
     * 找到需要删除英雄的前一个节点
     * @param no 编号
     */
    public void delete(int no) {
        HeroNode temp = header;
        //标记是否找到
        boolean flag = false;
        while (temp.getNext() != null) {
             if (temp.getNext().getNo() == no) {
                 flag = true;
                 break;
             }
             temp = temp.getNext();
        }

        if (flag) {
            temp.setNext(temp.getNext().getNext());
        } else {
            System.out.println("删除失败，没有编号为" + no + "的英雄");
        }
    }

    /**
     * 显示链表的信息
     */
    public void showLinkList() {
        HeroNode temp = header.getNext();
        while (temp != null) {
            System.out.println(temp);
            temp = temp.getNext();
        }
    }

}

```


## 双向链表

双向链表有一个数据域，两个指针域(一个指针域指向前一个节点，一个指针域指向后一个节点)

与单向链表相比，应为有一个指针域指向前一个节点，所以能够完成自我删除，并且在插入的过程中也不需要找到插入节点的前一个节点进行插入，可以直接找到这个需要插入的节点进行插入

### 目录结构

```
src
└── com
    └── hzj
        └── doublelinklist
            ├── DoubleHeroNode.java
            └── DoubleLinkedList.java
```


### 代码实现

1. 定义一个双向链表节点

```java
package com.hzj.doublelinklist;

/**
 * 双向链表的节点
 * @author hzj
 */
public class DoubleHeroNode {

    private int no;
    private String name;
    private String nickName;
    private DoubleHeroNode next;
    private DoubleHeroNode pre;

    public DoubleHeroNode() {
    }

    public DoubleHeroNode(int no, String name, String nickName) {
        this.no = no;
        this.name = name;
        this.nickName = nickName;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public DoubleHeroNode getNext() {
        return next;
    }

    public void setNext(DoubleHeroNode next) {
        this.next = next;
    }

    public DoubleHeroNode getPre() {
        return pre;
    }

    public void setPre(DoubleHeroNode pre) {
        this.pre = pre;
    }

    @Override
    public String toString() {
        return "DoubleHeroNode{" +
                "no=" + no +
                ", name='" + name + '\'' +
                ", nickName='" + nickName + '\'' +
                '}';
    }
}
```


2. 定义双向链表

```java
package com.hzj.doublelinklist;

import java.util.Stack;

/**
 * 双向链表
 * @author hzj
 */
public class DoubleLinkedList {

    private DoubleHeroNode header;

    public DoubleLinkedList() {
        header = new DoubleHeroNode();
    }

    public DoubleHeroNode getHeader() {
        return header;
    }

    /**
     * 添加节点到末尾
     * @param doubleHeroNode 添加的节点
     */
    public void add(DoubleHeroNode doubleHeroNode) {
        DoubleHeroNode temp = header;
        //将指针移动到最后
        while (temp.getNext() != null) {
            temp = temp.getNext();
        }
        //添加节点的前指针指向前一个节点
        doubleHeroNode.setPre(temp);
        //添加节点到最后
        temp.setNext(doubleHeroNode);
    }

    /**
     * 插入节点,通过编号从小到达插入
     * @param doubleHeroNode
     */
    public void addByNo(DoubleHeroNode doubleHeroNode) {
        //辅助节点
        DoubleHeroNode temp = header;
        //标记是否找到
        boolean flag = false;
        while (temp.getNext() != null) {
            if (temp.getNext().getNo() > doubleHeroNode.getNo()) {
                break;
            } else if (temp.getNext().getNo() == doubleHeroNode.getNo()) {
                flag = true;
                break;
            }
            temp = temp.getNext();
        }
        //如果存在相同的编号就不插入
        if (flag) {
            System.out.println("插入的节点的编号"+ doubleHeroNode.getNo() +"存在了");
        } else { //不存在相同的编号,在temp的后面插入
            //插入节点的next指针指向temp的next指针
            doubleHeroNode.setNext(temp.getNext());
            //插入节点的pre指针指向temp
            doubleHeroNode.setPre(temp);
            //temp的后一个节点的pre指向插入节点，需要判断temp是否是最后一个节点
            if (temp.getNext() != null) {
                temp.getNext().setPre(doubleHeroNode);
            }
            //temp的next指针指向插入节点
            temp.setNext(doubleHeroNode);
        }
        print();
        System.out.println("============================");
    }

    /**
     * 删除节点
     * @param no 节点的编号
     */
    public void delete(int no) {
        if (header.getNext() == null) {
            System.out.println("链表为空，删除失败");
            return;
        }
        //辅助指针
        DoubleHeroNode temp = header.getNext();
        //标记是否找到相同的编号
        boolean flag = false;
        while (temp != null) {
            if (temp.getNo() == no) {
                flag = true;
                break;
            }
            //指向下一个节点
            temp = temp.getNext();
        }

        if (flag) {
            //删除节点的前一个节点的next指向删除节点的后一个节点
            temp.getPre().setNext(temp.getNext());
            //判断是否是最后一个节点
            if (temp.getNext() != null) {
                //删除节点的后一个节点的pre指向删除节点的前一个节点
                temp.getNext().setPre(temp.getPre());
            }
        }
    }

    /**
     * 修改节点
     * @param doubleHeroNode 需要修改的节点
     */
    public void update(DoubleHeroNode doubleHeroNode) {
        if (header.getNext() == null) {
            System.out.println("链表为空，修改失败");
        }
        //辅助节点
        DoubleHeroNode temp = header.getNext();
        //标记是否查找到了需要修改的节点
        boolean flag = false;
        while (temp != null) {
            if (temp.getNo() == doubleHeroNode.getNo()) {
                temp.setName(doubleHeroNode.getName());
                temp.setNickName(doubleHeroNode.getNickName());
                //查到了，修改标记信息
                flag = true;
                break;
            }
            temp = temp.getNext();
        }

        //如果没有查到了，给出提示信息
        if (!flag) {
            System.out.println("需要修改的编号" + doubleHeroNode.getNo() + "不存在");
        }

    }

    public void print() {
        DoubleHeroNode temp = header.getNext();

        while (temp != null) {
            System.out.println(temp);
            temp = temp.getNext();
        }
    }
}
```
