const feedbackBtnEl = document.getElementById('feedbackBtn');
const feedbackEl = document.getElementById('feedback')

// event listener to listen for user submitted feedback
feedbackBtnEl.addEventListener('click', async (event) => {
    const targetEl = event.target;
    const blogId = targetEl.getAttribute('data-blogid');
    if(blogId && feedbackEl.value){
        const originLocation = window.origin;
        await fetch(`${originLocation}/api/blog/feedback`,{
            method:'POST',
            body:JSON.stringify({
                comment:feedbackEl.value,
                blog_id:blogId
            }),
            headers:{
                'Content-Type':'application/json',
            },
        })
        .then((response)=>{
            if(response.ok){
                document.location.replace(`${originLocation}/blog/feedback/${blogId}`)
            }
        })
        .catch((err)=>{
            console.error(err);
        })
    }
    else{
        window.alert('Please enter comment before you submit');
    }
})