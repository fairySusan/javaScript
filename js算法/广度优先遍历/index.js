const tree = [3,9,20,null,null]
function BFSearch (treeNode) {
  const queue = [treeNode];

  const res = []
  while (queue.length) {
    const level = []

    const len = queue.length

    for (let i=0;i<len;i++) {
      const top = queue.shift();
      level.push(top);

      if (top.left) {
        queue.push(top.left)
      }
  
      if (top.right) {
        queue.push(top.right)
      }
    }

    res.push(level)
  }

  return res
}


const tree2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val:3,
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 5
  }
}