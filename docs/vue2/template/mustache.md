---
title: Mustache
order: 1
group:
  title: 模板
  order: 5
---

## 什么是模板引擎

模板引擎是将`数据`变为`视图`的最优雅的解决方案。将一个`json`格式的数据结构，通过某一种规则，解析生成`html`代码

## 将数据变为视图的方法

### 原生DOM法

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Title</title>
  </head>
  <body>
    <div class="container"></div>

    <script>
      const container = document.querySelector('.container')
      const data = [
        {
          name: '张三',
          sex: '男',
          desc: '法外狂徒'
        },
        {
          name: '李四',
          sex: '男',
          desc: '路人'
        },
        {
          name: '老王',
          sex: '男',
          desc: '隔壁老王'
        }
      ]

      data.forEach((item, index) => {
        const title = document.createElement('div')
        title.innerText = '人员' + (index + 1)
        const name = document.createElement('p')
        name.innerText = '姓名: ' + item.name
        const sex = document.createElement('p')
        sex.innerText = '性别: ' + item.sex
        const desc = document.createElement('p')
        desc.innerText = '描述: ' + item.desc
        title.appendChild(name)
        title.appendChild(sex)
        title.appendChild(desc)
        container.appendChild(title)
      })
    </script>

  </body>
</html>
```

### 数组join法

数组join法就是在es6之前没有反引号，单引号和双引号无法换行，在一个数组中进行换行，达到书写看起来优雅的一种方案

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div class="container"></div>

<script>
  const container = document.querySelector('.container')
  const data = [
    {
      name: '张三',
      sex: '男',
      desc: '法外狂徒'
    },
    {
      name: '李四',
      sex: '男',
      desc: '路人'
    },
    {
      name: '老王',
      sex: '男',
      desc: '隔壁老王'
    }
  ]

  const html = []

  data.forEach((item, index) => {
    html.push(
        '<div>人员' + (index + 1),
        '<p>姓名: ' + item.name + '</p>',
        '<p>性别: ' + item.sex + '</p>',
        '<p>描述: ' + item.desc + '</p>',
        '</div>'
    )
  })
  container.innerHTML = html.join('')

</script>

</body>
</html>
```

### ES6反引号法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div class="container"></div>

<script>
  const container = document.querySelector('.container')
  const data = [
    {
      name: '张三',
      sex: '男',
      desc: '法外狂徒'
    },
    {
      name: '李四',
      sex: '男',
      desc: '路人'
    },
    {
      name: '老王',
      sex: '男',
      desc: '隔壁老王'
    }
  ]

  let html = ''

  data.forEach((item, index) => {
    html += `
  <div>
    人员${index}
    <p>姓名: ${item.name}</p>
    <p>性别: ${item.sex}</p>
    <p>描述: ${item.desc}</p>
  </div>
  `
  })
  container.innerHTML = html

</script>

</body>
</html>
```

### 模板引擎

这里模板引擎使用`mustache`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div class="container"></div>
<!-- type="text/template", 这个是-->
<script id="template" type="text/template">
    <div>
        {{#data}}
        人员 {{index}}
        <p>姓名: {{name}}</p>
        <p>性别: {{sex}}</p>
        <p>描述: {{desc}}</p>
        {{/data}}
    </div>
</script>

<script src="mustache.min.js"></script>

<script>
  const container = document.querySelector('.container')
  const data = [
    {
      index: 1,
      name: '张三',
      sex: '男',
      desc: '法外狂徒'
    },
    {
      index: 2,
      name: '李四',
      sex: '男',
      desc: '路人'
    },
    {
      index: 3,
      name: '老王',
      sex: '男',
      desc: '隔壁老王'
    }
  ]
  const template = document.querySelector('#template')
  container.innerHTML = Mustache.render(template.innerText, { data: data })
</script>


</body>
</html>
```

`<script type="text/template">`, 其中`type="text/template"`就是自己随便定义的一个类型，这种类型不会被浏览器识别，只会当做一个普通的script节点，然后还不显示里面的内容，其实简单改一下就是如下代码所示

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div class="container"></div>

<!--这里也可以用div代替，只是为了方便，用script + type，以后代码好维护一些，用div的话后期代码太多，不好找-->
<div id="template" style="display: none">
    <div>
        {{#data}}
        人员 {{index}}
        <p>姓名: {{name}}</p>
        <p>性别: {{sex}}</p>
        <p>描述: {{desc}}</p>
        {{/data}}
    </div>
</div>

<script src="mustache.min.js"></script>

<script>
  const container = document.querySelector('.container')
  const data = [
    {
      index: 1,
      name: '张三',
      sex: '男',
      desc: '法外狂徒'
    },
    {
      index: 2,
      name: '李四',
      sex: '男',
      desc: '路人'
    },
    {
      index: 3,
      name: '老王',
      sex: '男',
      desc: '隔壁老王'
    }
  ]
  const template = document.querySelector('#template')
  container.innerHTML = Mustache.render(template.innerHTML, { data: data })
</script>
</body>
</html>
```
