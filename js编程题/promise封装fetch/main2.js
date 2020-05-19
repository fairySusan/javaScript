function joinParams(url, params) {
  if (params) {
    let paramsArray = [];
    //拼接参数
    Object.keys(params).forEach(key =>
      paramsArray.push(key + '=' + params[key]),
    );
    if (url.search(/\?/) === -1) {
      url += '?' + paramsArray.join('&');
    } else {
      url += '&' + paramsArray.join('&');
    }
  }
  return url;
}
class Fetch {
  // 默认config配置
  initConfig = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
  };
  // 取消请求
  controller = new AbortController();
  signal = controller.signal;

  // 请求超时
  static TIMEOUT = 2000;
 
  static _timeoutPromise(timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('timeout');
            controller.abort();
        }, timeout);
    });
  }

  requestInterceptor = () => {};
  responseIntreceptor = () => {};
  constructor(config) {
    this.initConfig = config;
    this.interceptors = {
      request: {
        use: function (callback) {
          this.requestInterceptor = callback;
        }
      },
      response: {
        use: function (callback) {
          this.responseIntreceptor = callback;
        }
      }
    }
  }
  get(url, params = {}, config = this.initConfig) {
    const newUrl = joinParams(url, params);
    const specifyConfig = { method: 'GET', signal: signal };
    const newConfig = {...config, ...specifyConfig};
    newConfig = this.requestInterceptor(newConfig);
    return Promise.race([fetch(newUrl, newConfig), timeoutPromise(TIMEOUT)])
      .then(response => {
        if (response === 'timeout') {
          console.log('请求超时');
          return;
        }
        return response.json().then(res => {
          const newRes = this.responseIntreceptor(res);
          if (response.ok) {
            return Promise.resolve(newRes);
          }
          return Promise.reject(newRes);
        });
      })
      .catch(error => {
        console.log('发生了网络故障或请求被阻止');
      })
  };
  post(url, params = {}, config = this.initConfig) {
    const specifyConfig = { method: 'POST', signal: signal, body: params };
    const newConfig = {...config, ...specifyConfig};
    newConfig = this.requestInterceptor(newConfig);

    return Promise.race([fetch(url, newConfig), timeoutPromise(timeout)])
    .then(response => {
      if (response === 'timeout') {
        console.log('请求超时');
        return;
      }
      return response.json().then(res => {
        const newRes = this.responseIntreceptor(res);
        if (response.ok) {
          return Promise.resolve(res);
        }
        return Promise.reject(res);
      });
    })
    .catch(error => {
      console.log('发生了网络故障或请求被阻止');
    })
  };
  put(url, params = {}, config = this.initConfig) {
    const specifyConfig = { method: 'PUT', signal: signal, body: JSON.stringify(params) };
    const newConfig = {...config, ...specifyConfig};
    newConfig = this.requestInterceptor(newConfig);
  
    return Promise.race([fetch(url, newConfig), timeoutPromise(timeout)])
    .then(response => {
      if (response === 'timeout') {
        console.log('请求超时');
        return;
      }
      return response.json().then(res => {
        const newRes = this.responseIntreceptor(res);
        if (response.ok) {
          return Promise.resolve(res);
        }
        return Promise.reject(res);
      });
    })
    .catch(error => {
      console.log('发生了网络故障或请求被阻止');
    })
  };
  patch(url, params = {}, config = this.initConfig) {
    const specifyConfig = { method: 'PATCH', signal: signal, body: JSON.stringify(params) };
    const newConfig = {...config, ...specifyConfig};
    newConfig = this.requestInterceptor(newConfig);
  
    return Promise.race([fetch(url, newConfig), timeoutPromise(timeout)])
    .then(response => {
      if (response === 'timeout') {
        console.log('请求超时');
        return;
      }
      return response.json().then(res => {
        const newRes = this.responseIntreceptor(res);
        if (response.ok) {
          return Promise.resolve(res);
        }
        return Promise.reject(res);
      });
    })
    .catch(error => {
      console.log('发生了网络故障或请求被阻止');
    })
  };
}
