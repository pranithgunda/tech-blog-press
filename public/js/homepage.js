// javascript functionality that lets user to add a feedback

const blogsEl = document.getElementById('blogs');

// delegate event listener to blogs, on click event open blog for user to provide feedback

blogsEl.addEventListener('click', async (event) => {
    const targetEl = event.target;
    const blogId = targetEl.getAttribute('data-blogid');
    if (blogId) {
        document.location.replace(`/blog/${blogId}`)
    }
});