var mediator = (function() {
  var topics = {};
  var subscribe = function(topic, fn) {
    if (!topics[topic])  {
       topics[topic] = []; 
    }
    topics[topic].push({context: this, callback: fn})
    return this;
  }
  var publish = function(topic) {
    var args;
    if (!topics[topic]) {
      return false;
    }
    args = Array.prototype.slice.call(arguments, 1);
    for(var i=0,l=topics[topic].length; i<l; i++) {
      var subscription = topics[topic][i];
      subscription.callback.apply(subscription.context, args);
    }
    return this;
  }
  return {
    publish: publish,
    subscribe: subscribe,
    installTo: function(obj) {
      obj.subscribe = subscribe;
      obj.publish = publish;
    }
  }
}())
// 任何一个对象都可以拥有subscribe和publish方法了
// mediator.installTo 就是中间件，这就是中介者模式。有点像卖房子，通过中介可以把一套房子介绍给很多客户。
var person = {};
mediator.installTo(person);
person.subscribe('eat', () => {
  console.log('est');
});
person.publish('eat');