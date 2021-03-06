
var ComponentA = {
  template: '<h3>这里是局部注册的组件</h3>', // 局部注册组件
};
// h()三个参数， 第一个是tag/组件名 第二个是原生标签的attribute或者组件的props，第三个是子节点string/Array
var ComponentB = {
  data () {
    return {
      foo: true
    }
  },
  // 渲染函数
  render: function (h) {
    if (this.foo) {
      return h('div', {}, [
          '我是文本节点',
          h('span',{class: 'redcolor'},'这里是render渲染的')
        ]
      ); 
    } else {
      return h('h1', {}, 'title')
    }
  }
}

var ComponentC = {
  functional: true, // 函数式组件， 对于无状态(没有响应式数据)，也没有生命周期，也没有实例（没有this上下文）的组件可以写成函数式组件，好处是渲染开销低很多
  props: {},
  render: function (createElement, context) {

  }
}

// slot 插槽， 多个插槽的具名插槽
Vue.component('todo-list', {
  template: `<div>
  <h1>这是我的todolist</h1>
  <slot name="header"></slot>
  <todo-item v-for="item in groceryList" :key="item.id" :item="item"></todo-item>
  <slot name="footer"></slot>
  <component-a></component-a>
  <component-b></component-b>
  </div>`,
  data: function() {
    return {
      groceryList: [
        { id: 0, text: '蔬菜' },
        { id: 1, text: '奶酪' },
        { id: 2, text: '随便其它什么人吃的东西' }
      ]
    }
  },
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
});

Vue.component('todo-item', {
  template: '<li>{{item.text}}</li>',
  props: ['item'],
});
Vue.component('cat', {
  template: '<h1>我是一只猫</h1>'
})
let cont = Vue.component('dog', {
  template: '<h1>我是一只狗</h1>'
})
console.log('构造器', cont);
var app = new Vue({
  el: '#app',
  data: {
    currentTabComponent: 'dog' //  is 动态组件 <keep-alive></keep-alive> 缓存动态组件
  }
})

// 这就是为什么data必须是函数的原因
function Aniamal(options) {
  this.$init(options);
}
Aniamal.prototype.$init = function(options) {
  let vm = this;
  vm.$options = options;
}
var options = {
  data: function() {
    return {
      animalName: 'fish'
    }
  }
}
var fish = new Aniamal(options);
var bird = new Aniamal(options);
bird.$options.data().animalName = 'bird';
console.log(fish.$options.data().animalName);