// 获取前x天的日期
function getBeforeXDate(x) {
  const d = new Date();
  const today = d.getTime(); // 返回 1970 年 1 月 1 日至今的毫秒数。
  const xDate = d.setTime(today - x * 24 * 60 * 60 * 1000);
  console.log(moment(xDate).format('YYYY-MM-DD'));
  return moment(xDate).format('YYYY-MM-DD');
}

getBeforeXDate(10);

// 获取最近x天的日期列表： 数组
function getDaysList(num) {
  let days = [];
  for(var i = 0;i<num;i++){
    let str = new Date(new Date()
    .setDate(new Date().getDate()-i))
    .toLocaleDateString();
    let arr = str.split('/');
    let newStr = arr[1] +'/' + arr[2];
    days.unshift(newStr);
  }
  console.log(days);
  return days;
}

getDaysList(30);