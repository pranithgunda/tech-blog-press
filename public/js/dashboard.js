const dashboardPostsEl = document.getElementById('dashboardPosts');
const newPostEl = document.getElementById('newPost');


// delegated event listener to handle events related to blog posts updates from user dashboard
dashboardPostsEl.addEventListener('click', (event) => {
    const targetEl = event.target;
    const targetElType = targetEl.getAttribute('data-name');
    if (targetElType === 'titleButton') {
        const targetButtonId = targetEl.getAttribute('data-buttonid');
        if (targetButtonId) {
            const cardEl = document.querySelector(`[data-cardid="${targetButtonId}"]`);
            if (cardEl) {
                targetEl.classList.add('hidden');
                cardEl.classList.remove('hidden');
            }
        }
    }
    else if (targetElType === 'updatePost') {
        console.log('Update post button clicked')
    }
    else if (targetElType === 'deletePost') {
        console.log('delete post button clicked')
    }
}
);

// event listener to handle creation of new posts
newPostEl.addEventListener('click',(event)=>{
    console.log('New Post button clicked');
})






