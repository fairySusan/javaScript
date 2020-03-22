
var ComponentA = {
  template: '<h3>这里是局部注册的组件</h3>', // 局部注册组件
};
var ComponentB = {
  render: function (h) {
    return h('div', '这里是render渲染的');    // 渲染函数
  }
}

var ComponentC = {
  functional: true, // 函数式组件， 对于无状态(没有响应式数据)，也没有实例（没有this上下文）的组件可以写成函数式组件，好处是渲染开销低很多
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
Vue.component('dog', {
  template: '<h1>我是一只狗</h1>'
})
var app = new Vue({
  el: '#app',
  data: {
    currentTabComponent: 'dog' //  is 动态组件 <keep-alive></keep-alive> 缓存动态组件
  }
})