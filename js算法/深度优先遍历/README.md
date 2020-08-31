### 深度优先遍历
给定一个二叉树，返回所有从根节点到叶子节点的路径。
```
输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3
```
递归： 栈结构： 先调用 后返回， 最后调用，第一个返回。

```
let binaryTreePaths = function (root) {
  let res = []
  if (!root) {
    return res
  }

  if (!root.left && !root.right) { // 叶子节点
    return [`${root.val}`]
  }

  let leftPaths = binaryTreePaths(root.left) // 非叶子节点继续递归
  let rightPaths = binaryTreePaths(root.right)

  leftPaths.forEach((leftPath) => {
    res.push(`${root.val}->${leftPath}`)
  })
  rightPaths.forEach((rightPath) => {
    res.push(`${root.val}->${rightPath}`)
  })

  return res
}


```
