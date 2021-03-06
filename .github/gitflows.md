#### 分支规范

目前分支模式会采用类似`antd`的形式，分为`master`和`feat`两个主分支

- `master`分支

  1. 一些文档修复、bug 修复、项目底层能力比如打包修复会从`master`检出分支`fix/xxx`出来修复，修复完了通过`pr`合并回`master`

  2. 同时版本发布也会从`master`来检出

- `feat`分支

  开发新的 hooks 从 feat 检出分支`feat/xxx`，开发完成功能并且书写好相应文档和单元测试用例，通过`pr`的形式合并回`feat`

  最终包含新`hooks`的`feat`也会通过`pr`回归到`master`进行新版本的发布

- `release`分支

  `release/xxx`通常作为版本发布分支来做版本发布

#### 提交信息规范

- `commit`常规规范

  ```
  <类型>(作用域): 标题

  正文

  尾部
  ```

- 保持提交信息的整洁

  > 上游分支：通常指你当前分支检出的来源分支，比如`master`
  >
  > 下游分支：通常指你当前开发功能或者修复`bug`的分支

  1. 下游分支同步上有分支必须采用`rebase`的形式，避免产生`merge commit`
  2. 下游分支开发中可灵活产生`WIP`开发中的中间`commit`信息，但是在最终申请合并到上游主分支前，需要`rebase -i`主分支并且通过`-i`来`fixup`不必要的`commit`信息，保持汇入主分支时`commit`信息的整洁

#### PR 相关

- 后续应该提供一份`PR`的相关规范，并且在`PR`阶段会进行测试用例的执行（后续对覆盖率进行限定）、打包构建测试、文档构建测试等一些列`CI`流水线
