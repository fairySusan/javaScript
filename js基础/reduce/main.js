// reduce 函数 参数是一个回调函数， 第一个参数是累计值， 第二个参数是当前值
// 1. 求数组的和
let arr = [1, 3, 5, 6, 7, 9];
function sum(arr) {
  arr.reduce((sum, currValue) => {
    return sum = sum + currValue;
  }, 1);
}
// 2. 将二维数组转化为一维数组
let arr2 = [[1,2,3], [4,5]];
function flatten(arr) {
  arr.reduce((newArr, item) => {
    return newArr.concat(item);
  });
}

//3. 计算数组中每个元素出现的次数
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
function countFun(names) {
  let result = names.reduce((allNames, name) => {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
  });
  return result;
}