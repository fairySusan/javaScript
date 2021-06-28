const arr = [1,2,3,4,5]
const target = 8

/**
 * 在数组中找到两个数加起来等于target
 * 解题思路：遍历arr，将target-arr[i]和arr[i]存在map中，之后的元素如在map找的到,说明这个元素和之前的arr[i]，就是加起来为target的两个元素
 */

function findTwoNum (arr, target) {
  const mapObj = new Map()

  for (let i = 0; i<arr.length; i++) {
    const key = target - arr[i]
    if (mapObj.has(key)) {
      return [key, arr[i]]
    }
    mapObj.set(arr[i], key)
  }
  return '没找到'
}

console.log(findTwoNum(arr, target))



/***三数之和的问题-------------- */