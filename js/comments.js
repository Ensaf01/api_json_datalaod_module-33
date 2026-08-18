// use arrow function

const comment_1=() =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json()) // arrow function
    .then( result => console.log(result))// arrow function
    .catch(error => console.error("error happend",error))//// arrow function show error message
}

// same out put but amder je vabe code kore comfort se vabe korbo

const comment_2 = async() =>{
    try{
        const res= await fetch('https://jsonplaceholder.typicode.com/comments');// same ager moto res variable er modhe data get kore rakbe and wait korbe direct kono error a jump dibe na,serial a jabe await er jonno
    const result= await res.json(); //json korlam
    console.log(result);
    }
    catch{
        console.error("error happened");
    }
}