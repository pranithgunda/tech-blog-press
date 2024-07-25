const dashboardPostsEl = document.getElementById('dashboardPosts');
const newPostEl = document.getElementById('newPost');
const originLocation = window.origin;

// delegated event listener to handle events related to blog posts updates from user dashboard
dashboardPostsEl.addEventListener('click', (event) => {
    const targetEl = event.target;
    const blogId = targetEl.getAttribute('data-blogid');
    if (blogId) {
        document.location.replace(`${originLocation}/blog/update/${blogId}`);
    }
}
);

// event listener to handle creation of new posts
newPostEl.addEventListener('click', (event) => {
    // replace location for browser to render newpost handlebars
    document.location.replace(`${originLocation}/new`);
})






