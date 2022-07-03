import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/2';

axios.get(url).then(res=>{
 const todos = res.data;
 const id = todos.ID;
 const title = todos.Title;
 const finished  = todos.finished
 console.log(`
   The TODOS has a ID of : ${id}
   has a tile of : ${title}
   whether it has been completed of not ? : ${finished}
 `)
})