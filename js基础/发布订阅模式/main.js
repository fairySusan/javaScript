var salesOffices = {};//发布者
salesOffices.clientList = [];//缓存列表，存放订阅者的回调函数
salesOffices.listen = function(sub){
    this.clientList.push(sub);// 订阅的消息添加进缓存列表
}
salesOffices.trigger = function() {
    this.clientList.forEach((sub) => {
        sub.apply(this,arguments);
    })
}

/* 声明订阅者 */
function sub1(msg) {
    console.log("我是订阅者sub1",msg);
}
function sub2(msg) {
    console.log("我是订阅者sub2",msg);
}
function sub3(msg) {
    console.log("我是订阅者sub3",msg);
}
/* 添加订阅者 */
salesOffices.listen(sub1);
salesOffices.listen(sub2);
salesOffices.listen(sub3);
/* 触发发布 */
salesOffices.trigger("我是发布的消息");
/* 
现在发布者发布的消息，全部订阅者都收的到，
但是接下来我们要实现的是让不同的订阅者接受特定的消息
详情请看main2.js
*/