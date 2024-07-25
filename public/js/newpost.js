const createNewPostEl = document.getElementById('createNewPost');
const newTitleEl = document.getElementById('newTitle');
const newContentEl = document.getElementById('newContent');
const originLocation = window.origin;


// event listener to create new post
createNewPostEl.addEventListener('click', async (event) => {
    const targetEl = event.target;
    const user_id = targetEl.getAttribute('data-userid');
    if (newTitleEl.value && newContentEl.value && user_id) {
        await fetch(`${originLocation}/api/blog`, {
            method: 'POST',
            body: JSON.stringify({
                title: newTitleEl.value,
                content: newContentEl.value,
                user_id: user_id
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    document.location.replace(`${originLocation}/dashboard`)
                }
            })
            .catch((err) => {
                console.error(err);
            })
    }
    else {
        window.alert('Please enter title and content to create new blog')
    }
})