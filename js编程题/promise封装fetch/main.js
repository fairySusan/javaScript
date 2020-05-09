// 默认config配置
const initConfig = {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
  mode: 'cors',
};

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
// 取消请求
let controller = new AbortController();
let signal = controller.signal;

// 请求超时
 let timeout = 2000;
 function timeoutPromise(timeout) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('timeout');
          controller.abort();
      }, timeout);
  });
}
const get = function(url, params = {}, config = initConfig) {
  const newUrl = joinParams(url, params);
  const specifyConfig = { method: 'GET', signal: signal };
  const newConfig = {...config, ...specifyConfig};

  return Promise.race([fetch(newUrl, newConfig), timeoutPromise(timeout)])
    .then(response => {
      if (response === 'timeout') {
        console.log('请求超时');
        return;
      }
      return response.json().then(res => {
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

const post = function(url, params = {}, config = initConfig) {
  const specifyConfig = { method: 'POST', signal: signal, body: JSON.stringify(params) };
  const newConfig = {...config, ...specifyConfig};

  return Promise.race([fetch(url, newConfig), timeoutPromise(timeout)])
  .then(response => {
    if (response === 'timeout') {
      console.log('请求超时');
      return;
    }
    return response.json().then(res => {
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

const put = function(url, params = {}, config = initConfig) {
  const specifyConfig = { method: 'PUT', signal: signal, body: JSON.stringify(params) };
  const newConfig = {...config, ...specifyConfig};

  return Promise.race([fetch(url, newConfig), timeoutPromise(timeout)])
  .then(response => {
    if (response === 'timeout') {
      console.log('请求超时');
      return;
    }
    return response.json().then(res => {
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

const patch = function(url, params = {}, config = initConfig) {
  const specifyConfig = { method: 'PATCH', signal: signal, body: JSON.stringify(params) };
  const newConfig = {...config, ...specifyConfig};

  return Promise.race([fetch(url, newConfig), timeoutPromise(timeout)])
  .then(response => {
    if (response === 'timeout') {
      console.log('请求超时');
      return;
    }
    return response.json().then(res => {
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


const delete1 = function(url, params = {}, config = initConfig) {
  const specifyConfig = { method: 'DELETE', signal: signal, body: JSON.stringify(params) };
  const newConfig = {...config, ...specifyConfig};

  return Promise.race([fetch(url, newConfig), timeoutPromise(timeout)])
  .then(response => {
    if (response === 'timeout') {
      console.log('请求超时');
      return;
    }
    return response.json().then(res => {
      if (response.ok) {
        return Promise.resolve(res);
      }
      return Promise.reject(res);
    });
  })
  .catch(error => {
    console.log('发生了网络故障或请求被阻止');
  })
}


const getListData = () => {
  return get(`/getlist?timer=${new Date().getTime()}`, {filter: 'red'});
};
const postSearchData = (params) => {
  return post('/postData', params)
}

getListData().then(res => {
  console.log('res', res);
}).catch(error => {
  console.log('error', error.message);
});

const par = {
  color: 'red',
  size: 'big',
  isBlack: true,
}
postSearchData(par).then(res => {
  console.log('postres', res);
}).catch(error => {
  console.log('posterror', error.message);
})
