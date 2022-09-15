import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Deletetodo, toggleDone } from '../redux/actions/todoactions';
import EditTask from './EditTask';

function Task({todo}) {
  const dispatch=useDispatch()
  return (
    <div style={{display:"flex", justifyContent: "center", gap: "10px", padding: "30px",width: "50%", alignItems: "center", margin: "10px auto", border: "pink dotted", color: "blue", fontSize: "30px", fontFamily: "Verdana", }}>
    <p style={{textDecoration: todo.isdone ? "line-through" : "none"}}>{todo.text}</p>
    <EditTask todo={todo} />
    <Button variant='primary' onClick={()=>dispatch(toggleDone(todo.id))}>DONE</Button>
    <Button variant='danger' onClick={()=>dispatch(Deletetodo(todo.id))}>DELETE</Button>
    </div>
  )
}
export default Task;