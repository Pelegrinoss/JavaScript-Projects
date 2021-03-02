const cForm = document.querySelector('#cForm')
cForm.addEventListener('submit', function(e){
    e.preventDefault();
    const usernameInput = cForm.elements.username;
    const commentInput = cForm.elements.comment;
    addComment(usernameInput.value, commentInput.value);
    usernameInput.value = '';
    commentInput.value = '';
})

    const comsContainer = document.querySelector('#coms');
    const addComment = (username, comment) => {
    const newComment = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username);
    newComment.append(bTag);
    newComment.append(`- ${comment}`);
    comsContainer.append(newComment);}

    comsContainer.addEventListener('click', function(e){
        e.target.nodeName === 'LI' && e.target.remove();
    })