function Promise (executor) {
  this.status = 'pending';
  this.data = undefined;
  this.onResolvedCallback = [];
  this.onRejectedCallback = [];

  function resolve(value) {
    if (this.status === 'pending') {
      this.status = 'resolved';
      this.data = value
      for(let i = 0; i < this.onResolvedCallback.length; i++) {
        this.onResolvedCallback[i](value)
      }
    }
  }

  function reject(e) {
    if (this.status === 'pending') {
      this.status = 'rejected';
      this.data = e;
      for (let i = 0; i < this.onRejectedCallback.length; i++) {
        this.onRejectedCallback[i](e)
      }
    }
  }

  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

Promise.prototype.then = function (onResolved, onRejected) {
  let promise2;
  onResolved = typeof onResolved === 'function' ? onResolved : function(data) {};
  onRejected = typeof onRejected === 'function' ? onRejected : function(e) {};

  if (this.status === 'resolved') {
    return promise2 = new Promise(function (resolve, reject) {
      try {
        let returnValue = onResolved(this.data)
        if (returnValue instanceof Promise) {
          returnValue.then(resolve, reject)
        } else {
          resolve(returnValue)
        }
      } catch (e) {
        reject(e)
      }
    })
  }

  if (this.status === 'rejected') {
    return promise2 = new Promise(function (resolve, reject) {
      try {
        let returnValue = onRejected(this.data)
        if (returnValue instanceof Promise) {
          returnValue.then(resolve, reject)
        }
      } catch (e) {
        reject(e)
      }
    })
  }

  if (this.status === 'pending') {
    return promise2 = new Promise(function (resolve, reject) {
      this.onResolvedCallback.push(function (value) {
        try {
          let returnValue = onResolved(this.data)
          if (returnValue instanceof Promise) {
            returnValue.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })

      self.onRejectedCallback.push(function(reason) {
        try {
          var x = onRejected(self.data)
          if (x instanceof Promise) {
            x.then(resolve, reject)
          }
        } catch (e) {
          reject(e)
        }
      })
    })
  }
}

Promise.prototype.catch = function (onRejected) {
  this.then(null, onRejected)
}