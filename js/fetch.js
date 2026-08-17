/*
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
*/

/* 1. in url have API address ,that means i want to go this address and take data from there
2. fetch is build in function which request to api for data
3. 1st then-> after response come from ApI we store this data in respon or x variable 
4. then this data convert into JSON or Object formate
5.2nd then-> 1st then data come to 2nd then and print
*/

function loadata(){
    const url='https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(respon=>respon.json())
    .then(result=> console.log(result))
}