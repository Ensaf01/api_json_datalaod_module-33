function loadata2()
{
fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res=> res.json())
.then(result=> console.log(result))

}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(res=>console.log(res))
}