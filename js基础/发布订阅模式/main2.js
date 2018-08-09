var salesOffices = {};//发布者
salesOffices.clientList = {};//缓存列表，存放订阅者的回调函数
salesOffices.listen = function(key,sub){
    if(!(this.clientList[key])){
        this.clientList[key] = [];
    }
    this.clientList[key].push(sub);// 订阅的消息添加进缓存列表
}
salesOffices.trigger = function() {//发布消息
    console.log(Array.prototype.slice.call(arguments,0));//["click", "我是发布的消息"]
    var key = Array.prototype.slice.call(arguments,0)[0];
    //提高性能
    if(!this.clientList[key] || this.clientList[key].length == 0){
        return
    }
    this.clientList[key].forEach((sub) => {
        sub.apply(this,arguments);
    })
}
//移除订阅者
salesOffices.removeSubscriber = function(key,sub) { 
    if(!this.clientList[key] || this.clientList[key].length == 0){
        return
    }
    const index = this.clientList[key].findIndex((element) => {return element == sub});
    this.clientList[key].splice(index,1);
}
/* 移除一类事件的所有订阅者 */
salesOffices.removeAllSubscribers = function(key) {
    if(!this.clientList[key] || this.clientList[key].length == 0){
        return
    }
    delete this.clientList[key];
}
/* 声明订阅者 */
function sub1(key,msg) {
    console.log("我是订阅者sub1",key,msg);
}
function sub2(key,msg) {
    console.log("我是订阅者sub2",key,msg);
}
function sub3(key,msg) {
    console.log("我是订阅者sub3",key,msg);
}
/* 添加订阅者 */
salesOffices.listen('click',sub1);
salesOffices.listen('click',sub2);
salesOffices.listen('mouseover',sub3);
/* 触发发布 */
salesOffices.trigger('click',"我是发布的消息");//sub3虽然被订阅，但是不会被执行
salesOffices.removeSubscriber('click',sub1);
salesOffices.trigger('click',"我是发布的消息");
salesOffices.removeAllSubscribers('click');
salesOffices.trigger('click',"我是发布的消息");
/* 
现在发布者发布的消息，全部订阅者都收的到，
但是接下来我们要实现的是让不同的订阅者接受特定的消息，
事件机制就是发布订阅模式
*/