/**
 * 最多保留2为小数
 * 1、输入是整数就直接返回
 * 2、输入的本来只有一位小数也直接返回
 * 3、输入的本来只有两位小数也直接返回
 * 4、输入的是12.0的返回12
 * 5、输入的是12.20的返回12.2
 * **/
function fixedDec (value) {
  if (Number.isInteger(value)) {
    return value
  }
  const r = value.toString()
  const desL = r.split('.')[1].length
  if (desL < 2) {
    return parseFloat(r)
  } else {
    return parseFloat(value.toFixed(2))
  }
}