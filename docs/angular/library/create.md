---
group:
  title: 库
  order: 3
title: 创建库
order: 1
---

## 创建 Angular 库

先使用`angualr-cli`创建一个 Angular 库项目：

```bash
ng new ngx-pro-components
```

然后进入项目目录，创建一个`table`组件库, 执行以下命令：

```bash
ng generate library table --prefix=an
```

其中`--prefix`参数是给 Angular 组件设置前缀，可以根据自己喜好设置。

生成一个新的库的时候，会在项目根目录下创建一个`projects`目录，里面包含了`table`库的源码。

并且在`angular.json`文件中会自动添加一个新的项目配置：

```json
{
  "projects": {
    "table": {
      "projectType": "library",
      "root": "projects/table",
      "sourceRoot": "projects/table/src",
      "prefix": "an",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:ng-packagr",
          "options": {
            "project": "projects/table/ng-package.json"
          },
          "configurations": {
            "production": {
              "tsConfig": "projects/table/tsconfig.lib.prod.json"
            },
            "development": {
              "tsConfig": "projects/table/tsconfig.lib.json"
            }
          },
          "defaultConfiguration": "production"
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "tsConfig": "projects/table/tsconfig.spec.json",
            "polyfills": ["zone.js", "zone.js/testing"]
          }
        }
      }
    }
  }
}
```

对`angular.json`文件做一点小调整， 将`projects`配置下的`table`改为`@angle/table`

```diff {3,4}
{
  "projects": {
-    "table": {
+    "@angle/table": {
      }
    }
  }
}
```

然后对`tsconfig.json`文件的别名设置做一下调整：

```diff {5-8}
{
  "compileOnSave": false,
  "compilerOptions": {
    "paths": {
-     "table": [
+     "@angle/table": [
-       "./dist/table"
+       "./projects/table/src/public-api.ts"
      ]
    }
  }
}
```

这样就可以在其他项目中使用`@angle/table`库了。

如果不对`tsconfig.json`文件做调整也可以，只是在使用的时候，需要运行`ng build @angle/table --watch`, 然后在项目中`import { TableModule } from '@angle/table';`使用，当库多的时候
需要运行的就多，所以我对`tsconfig.json`做了调整。

以上就创建了一个 Angular 库，同样的步骤，可以继续创建其他组件库，只需要把`table`改成其他名字即可。

现在继续创建`form`库

- 运行 `ng generate library form --prefix=an`

- 在 `angular.json` 文件中将 `projects->form` 改为 `projects->@angle/form`

- 在 `tsconfig.json` 文件中将 `paths` 下的 `form` 改为 `@angle/form`

在 `table` 库需要使用 `form` 库的内容，只需要`impot { FormXxxComponent } from '@angle/form';`即可,不要使用相对路径，否者打包之后去使用的时候会出问题.

## 打包库

## 发布库
