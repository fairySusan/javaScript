// 发布订阅的模式
function Router() {
  this.routes = {};
  this.currentUrl = "";
}
Router.prototype.route = function(path, callback) {
  this.routes[path] = callback || function(){}
}
Router.prototype.refresh = function() {
  console.log(location.hash.slice(1));
  this.currentUrl = location.hash.slice(1) || '/';  //如果存在hash值则刷新当前页面，否则设置hash值为/
  this.routes[this.currentUrl]();
}
Router.prototype.init = function() {
  window.addEventListener('load', this.refresh.bind(this), false);
  window.addEventListener('hashchange', this.refresh.bind(this), false); // 路由改变实现局部刷新
}
window.Router = new Router();
window.Router.init();