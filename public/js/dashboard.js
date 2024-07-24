const dashboardPostsEl = document.getElementById('dashboardPosts');
const newPostEl = document.getElementById('newPost');


// delegated event listener to handle events related to blog posts updates from user dashboard
dashboardPostsEl.addEventListener('click', (event) => {
const targetEl = event.target;
const blogId = targetEl.getAttribute('data-blogid');
if(blogId){
    const originLocation = window.origin;
    document.location.replace(`${originLocation}/blog/update/${blogId}`);
}
}
);

// event listener to handle creation of new posts
newPostEl.addEventListener('click',(event)=>{
    console.log('New Post button clicked');
})






