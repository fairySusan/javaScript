class GPromise {
    constructor(executor) {
        this._promiseStatus = GPromise.PENDING;
        this._promiseValue;
        this.execute(executor);
    }
    execute(executor) {
        if(typeof executor !== 'function' ) {
            throw new Error('GPromise resolver ${executor} is not a function')
        }
        try {
            executor(this.resolve, this.reject);
        } catch(e) {
            this._promiseStatus = GPromise.REJECTED;
            this._promiseValue = e;
        }
    }
    then(onfulfilled, onrejected) {
        return setTimeout(this.asyncCallBack(onfulfilled, onrejected), 0);
    }
    asyncCallBack(onfulfilled, onrejected) {
        let returnValue;
        // then函数会返回一个promise实例，并且会resolve(回调函数的返回值也就是returnValue)，作为下一个then函数回调函数的参数
        let returnPromise = new GPromise(() => {}); 
        if (typeof onfulfilled === 'function' && 
            typeof onrejected === 'function' && 
            this._promiseStatus !== GPromise.PENDING){
            try {
                if (this._promiseStatus === GPromise.FULFILLED) {
                    this.returnValue = onfulfilled(this._promiseValue);
                }
                if (this._promiseStatus === GPromise.REJECTED) {
                    this.returnValue = onrejected(this._promiseValue);
                }
                //1.then回调函数返回一个promise对象， 根据then函数的回调函数的返回值确定返回的 promise的状态
                if (returnValue instanceof GPromise) {
                    setTimeout(() => {
                        if (this.returnValue._promiseStatus !== GPromise.PENDING) {
                            returnPromise._promiseStatus = returnValue._promiseStatus;
                            returnPromise._promiseValue = returnValue._promiseValue;
                        }
                    }, 0)
                } else {  // 2. then回调函数返回的不是promise对象,是一个值
                    returnPromise._promiseValue = returnValue;
                    returnPromise._promiseStatus = GPromise.FULFILLED;
                }
                
            }catch(e) {
                // 回调函数中抛出错误的情况
                returnPromise._promiseStatus = GPromise.REJECTED;
                returnPromise._promiseValue = e;
            }
        }
        return returnPromise;
    }
    resolve(data) {
        if (this._promiseStatus !== GPromise.PENDING) return;
        this._promiseStatus = GPromise.FULFILLED;
        this._promiseValue = data;
    }
    reject() {
        if(this._promiseStatus !== GPromise.PENDING) return;
        this._promiseStatus = GPromise.REJECTED;
        this._promiseValue = data;
    }
}
GPromise.PENDING = 'pending';
GPromise.FULFILLED = 'fulfilled';
GPromise.REJECTED = 'rejected';