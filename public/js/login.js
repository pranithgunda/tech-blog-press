//login user by reading username, password and make an API call to authenticate user 

const usernameEl = document.getElementById('username');
const passwordEl = document.getElementById('password');

const loginButtonEl = document.getElementById('login');

loginButtonEl.addEventListener('click', async (event) => {
    if (usernameEl.value && passwordEl.value) {
        await fetch(`/api/user/login`, {
            method: 'POST',
            body: JSON.stringify({
                username: usernameEl.value,
                password: passwordEl.value
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    document.location.replace('/');
                }
            })
            .catch((err) => {
                window.alert('Please enter valid username and password');
                console.error(err);
            })
    }
    else {
        window.alert('Please enter username and password to login');
    }
});

