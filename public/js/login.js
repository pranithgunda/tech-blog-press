//login user by reading username, password and make an API call to authenticate user 

const usernameEl = document.getElementById('username');
const passwordEl = document.getElementById('password');

const loginButtonEl = document.getElementById('login');

loginButtonEl.addEventListener('click',async (event)=>{
if(usernameEl.value&&passwordEl.value){
const response = await fetch(`/api/user/login`,{
    method:'POST',
    body:JSON.stringify({
        username:usernameEl.value,
        password:passwordEl.value
    }),
    headers:{
        'Content-Type':'application/json',
    },
});
if(response.ok){
    document.location.replace('/');
}
else{
window.alert('Please enter correct username and password');
}
}
else{
    window.alert('Please enter username and password to login');
}
});

