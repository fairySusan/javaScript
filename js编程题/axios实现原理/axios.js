const axios = {
    get: function(url) {
        const promise = new Promise(function(resolve, reject) {
            const xml = new XMLHttpRequest();
            xml.open('GET', url);
            xml.onreadystatechange = function() {
                if (xml.readyState !==4 ) {
                    return;
                }
                if (this.status === 200) {
                    resolve(xml.response);
                }else {
                    reject(xml.statusText);
                }
            }
            xml.send();
        });
        return promise;
    }
}
axios.get('/getData').then((res) => {
    console.log(res);
}, (statusText) => {
    console.log("出错了", statusText);
})