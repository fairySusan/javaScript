(function(root) {
   var _ = function(dataSource) {
       // 在_();的时候就可以实例化了
       if (! (this instanceof _)) {
        return new _(dataSource);
       }
       this.dataSource = dataSource;
   }
   // 数组去重的函数
    _.uniq = function(arr, callback) {
        let result = [];
        let temp;
        arr.forEach((element) => {
            temp = callback ? callback(element) : element;
            if (!result.includes(temp)){
                result.push(temp);
            }
        });
        return result;
    }
    _.chain = function(dataSource) {
        let instance = _(dataSource);
        instance._chain = true;
    }
    // 将_自身的扩展方法添加到原型对象中,使_的实例对象具有这些方法
    _.mixin = function(obj) {
        // 拿到_对象的属性名称数组['uniq','mixin','each'],传入给each
        let keyArr = Object.keys(obj);
        keyArr.forEach(keyItem => {
            obj.prototype[keyItem] = function() {
                let func = obj[keyItem];
                return func.call(this, this.dataSource, arguments[0]); // arguments[0]是传入的回调函数
            }
        });
    }
    _.mixin(_);
    return root._ = _;
})(this)