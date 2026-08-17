// json -> javaScript object Notation



//JSON.stringify
//  /* json means it convert js value into json string*/

const user={id:1,name:'Ensaf Hossain'};
console.log(user); //js
const stringified=JSON.stringify(user);
console.log(stringified); //json
// normal and stringify output almost same but not same

/*  output is

{ id: 1, name: 'ensaf' } //id can be number then normal js create problem thats why json convert all as string for ignore like this problem
{"id":1,"name":"ensaf"}

*/

const shop = {
    owner:'Ensaf',
    address:{
        street:"framgate road",
        country:"bangladesh",
        road:"432 green road"
    },
    products:['laptop','mac','computer'],
    revenue: 500000,
    isOpen:true,
    isNew:false
};

console.log("normal object print: \n\n",shop);

const shopJson=JSON.stringify(shop);
console.log("json object print convert into json string: \n\n",shopJson);
console.log(typeof shopJson);