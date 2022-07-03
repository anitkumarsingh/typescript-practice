import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/2';

axios.get(url).then(res=>{
 const todos = res.data;
 const {id,title,completed} = todos;
 console.log(`
   The TODOS has a ID of : ${id}
   has a tile of : ${title}
   whether it has been completed of not ? : ${completed}
 `)
})