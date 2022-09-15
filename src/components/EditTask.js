import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { Edittodo } from '../redux/actions/todoactions';

function EditTask({todo}) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(todo.text)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch= useDispatch()
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FormControl 
        type="text" 
        value={text} 
        onChange={(e)=>setText(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button 
          variant="primary" 
          onClick={()=>{dispatch(Edittodo(text, todo.id));
            handleClose()}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask;