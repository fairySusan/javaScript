function ObserverList() {
    this.observerList = [];
}
ObserverList.prototype.Add = function(obj) {
    return this.observerList.push(obj);
}
ObserverList.prototype.Empty = function() {
    this.observerList = [];
}
ObserverList.prototype.Count = function() {
    return this.observerList.length;
}
ObserverList.prototype.Get = function( index ){
    if(index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
}
ObserverList.prototype.Insert = function(obj, index) {
    var pointer = -1;
    if (index === 0) {
        this.observerList.unshift(obj);
        pointer = index;
    }else if (index === this.observerList.length) {
        this.observerList.push(obj);
        pointer = index;
    }
    return pointer;
}