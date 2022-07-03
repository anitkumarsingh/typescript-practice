import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/2';

axios.get(url).then(res=>{
  console.log(res.data);
})