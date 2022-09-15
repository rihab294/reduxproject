import React from 'react'
import { useSelector } from 'react-redux';
import Task from './Task';

function ListTask() {
    const todos=useSelector(state=>state.todoreducer.todos);
  return (
    <div>
    {
        todos.map((todo)=>
        <Task todo={todo}/>)
    }
    </div>
  ) 
}
export default ListTask;