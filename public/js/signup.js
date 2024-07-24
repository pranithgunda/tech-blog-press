// signup user by reading username and password and make an API call to create profile

const usernameEl = document.getElementById('username');
const passwordEl = document.getElementById('password');

const signupButtonEl = document.getElementById('signup');

signupButtonEl.addEventListener('click',async(event)=>{
    if(usernameEl.value && passwordEl.value){
        await fetch(`/api/user/signup`,{
            method:'POST',
            body:JSON.stringify({
                username:usernameEl.value,
                password:passwordEl.value
            }),
            headers:{
                'Content-Type':'application/json',
            },
        })
        .then((response)=>{
            if(response.ok){
                document.location.replace('/');
            }
        })
        .catch((err)=>{
            window.alert('Failed creating a user profile. Please try again later');
            console.error(err);
        })
    }
    else{
        window.alert('Please enter username and password to signup');
    }
});
