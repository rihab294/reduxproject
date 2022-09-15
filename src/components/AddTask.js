import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Addtodo } from '../redux/actions/todoactions'

function AddTask() {
    const [text, setText]= useState()
    const dispatch=useDispatch()
    
    const handleadd= (e) =>{
        e.preventDefault()
        if (text.trim())
        {
        dispatch(Addtodo(text))
        setText("");
    }
    else {
        (window.confirm("text is required !")) 
    }
    }
    return (
    <div style={{display : "flex", justifyContent: "center", padding: "30px"}}>
    <Form onSubmit={handleadd} >
    <FormControl type="text" value={text} onChange={(e)=>setText(e.target.value)} />
    <Button type="submit" variant="secondary" >Add Task</Button>
    </Form>
    </div>
    
  )
}
export default AddTask;
