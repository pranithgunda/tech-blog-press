const feedbackBtnEl = document.getElementById('feedbackBtn');
const feedbackEl = document.getElementById('feedback')

// event listener to listen for user submitted feedback
feedbackBtnEl.addEventListener('click',(event)=>{
    // disable feedback text area
    feedbackEl.disabled = true;
    feedbackBtnEl.classList.add('hidden');
    // Call api to add feedback to post
})