function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(result=>displayUserName(result))
}
function displayUserName(names_User){
    const ul=document.getElementById('user_id');
    for(const use of names_User){
        console.log(use.name);
        const li=document.createElement('li');
        li.innerText=use.name;
        ul.appendChild(li);
    }
}