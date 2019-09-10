const subbtn = document.getElementById('submit');
subbtn.addEventListener('click', () => {
    const params = {
        name: document.getElementById('login-name').value,
        password: document.getElementById('password').value,
        file: document.getElementById('file').files[0],
    }
    const formdata = new FormData();
    formdata.append('name', document.getElementById('login-name').value);
    formdata.append('password', document.getElementById('password').value);
    formdata.append('file', document.getElementById('file').files[0]);
    axios.post('/login',formdata).then(res => {
        console.log(res);
    })
    const age = 123;
    axios.get(`/getData?age=${age}`).then((res) => {
        console.log('age', res.data.age);
    })
})