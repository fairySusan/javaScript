var Observer = function() {
  this.clientList = [];//缓存列表，存放订阅者的回调函数
};
Observer.prototype.subscribe = function(target, sub){
  target.clientList.push(sub);// 订阅的消息添加进缓存列表
}
Observer.prototype.trigger = function() {
    this.clientList.forEach((sub) => {
       sub.apply(this,arguments);
    })
}

/* 声明观察者 */
var obersverA = new Observer();
var obersverB = new Observer();
var obersverC = new Observer();
var obersverD = new Observer();

/* 观察者去订阅自己感兴趣的事件，并传入当这个事件被触发是调用的回调函数 */
obersverA.subscribe(obersverD, function(msg) {
  console.log('观察者A作出反馈:' + msg);
});
obersverB.subscribe(obersverD, function(msg) {
  console.log('观察者B作出反馈:' + msg);
});
obersverC.subscribe(obersverD, function(msg) {
  console.log('观察者C作出反馈:' + msg);
});
/* 触发发布 */
obersverD.trigger("我是发布的消息");
/* 
观察者去订阅自己感兴趣的发布者, 并将回调函数存于发布者的clientList中，
当发布者发布消息时候，发布者的clientList里的所以回调函数都将被调用
观察者模式与发布订阅模式唯一的区别就是，发布订阅模式又一个集中调度中心。调度中心来做中间人连接发布者和订阅者
*/