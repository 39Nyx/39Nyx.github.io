---
title: 关联远程分支
order: 2
---

## 查看当前关联的远程分支

```shell
git branch -vv
```

输出示例:

```shell
* main     abc1234 [origin/main] Fix login bug
  dev      def5678 [origin/dev] Add feature
```

方括号 `[origin/main]`表示本地 `main` 分支当前关联的是远程 `origin/main`。

## 解除旧的远程分支关联

如果本地分支已关联了错误的远程分支，先解除绑定：

```shell
git branch --unset-upstream <本地分支名>
```

例如:

```shell
git branch --unset-upstream main
```

## 重新关联到新的远程分支

- 通过branch命令直接绑定

```shell
git branch -u <远程仓库名>/<远程分支名> <本地分支名>
# 或
git branch -u <远程仓库名>/<远程分支名>
```

例如:

```shell
# 将本地 main 分支关联到 origin/new-main
git branch -u origin/main main

# 如果当前在 main 分支，可省略分支名
git checkout main
git branch -u origin/main
```

- 通过 git push绑定

```shell
git push -u <远程仓库名> <本地分支名>:<远程分支名>
```

例如:

```shell
# 将本地 dev 分支推送到 origin/new-dev 并关联
git push -u origin dev:new-dev
```


验证是否关联成功

```shell
git branch -vv
```

## 总结

| 操作                                      | 说明 |
|-----------------------------------------| --- |
| `git branch -vv`                        | 查看当前关联的远程分支 |
| `git branch --unset-upstream <本地分支名>`   | 解除本地分支的远程分支绑定 |
| `git branch -u <远程仓库名>/<远程分支名> <本地分支名>` | 直接绑定本地分支到远程分支 |
| `git push -u <远程仓库名> <本地分支名>:<远程分支名>`   | 推送本地分支并关联到远程分支 |
