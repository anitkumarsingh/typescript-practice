import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/2';

interface TODO {
id:number,
title:string,
completed:boolean
}
axios.get(url).then(res=>{
 const todos = res.data as TODO;
 const id = todos.id;
 const title = todos.title;
 const completed  = todos.completed
 console.log(`
   The TODOS has a ID of : ${id}
   has a tile of : ${title}
   whether it has been completed of not ? : ${completed}
 `)
})