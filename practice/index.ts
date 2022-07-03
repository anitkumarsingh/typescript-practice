import axios from "axios";
import {logTodos} from '../utility';

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
 logTodos(id,title,completed)
})