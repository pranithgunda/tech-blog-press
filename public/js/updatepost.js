const blogPostEl = document.getElementById('blogPost');
const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');
const originLocation = window.origin;

// delegate event listener to handle update and delete blogs
blogPostEl.addEventListener('click', async (event) => {
    const targetEl = event.target;
    const targetButtonType = targetEl.textContent;
    if (targetButtonType.includes('Update')) {
        const user_id = targetEl.getAttribute('data-userid');
        const blog_id = targetEl.getAttribute('data-blogid');
        if (titleEl.value && contentEl.value) {
            await fetch(`${originLocation}/api/blog/${blog_id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    title: titleEl.value,
                    content: contentEl.value,
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
            window.alert('Please enter both title and content to update post');
        }
    } else if (targetButtonType.includes('Delete')) {
        const blog_id = targetEl.getAttribute('data-blogid');
        await fetch(`${originLocation}/api/blog/${blog_id}`, {
            method: 'DELETE',
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
})