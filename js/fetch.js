/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
*/

function loadata(){
    const url='https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(respon=>respon.json())
    .then(result=> console.log(result))
}