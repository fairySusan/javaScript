const arr = [1,2,3,4,5]
const target = 8

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