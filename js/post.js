function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(result => displayPost(result))
}
loadPosts();
function displayPost(posts){
    console.log(posts);
    const postContainer=document.getElementById('post-container');
    for(const post of posts){
        const DivPost=document.createElement('div');
        DivPost.classList.add('post')
        DivPost.innerHTML= `
        <h3> user-Id: ${post.userId} </h3>
        <h4> post: ${post.title}</h4>
        <p> post description: ${post.body}
        `;
        postContainer.appendChild(DivPost);
    }
}