import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { SearchDone, SearchNotDone } from '../redux/actions/todoactions';
import { SEARCHDONE } from '../redux/types';


function NavBar() {
    const donetasks= useSelector(state=>state.todoreducer.todos);
    const dispatch=useDispatch()
    return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Search in tasks by : </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"> 
          <Form className="d-flex">
            <Button variant="outline-success" onClick={()=>dispatch(SearchDone())}>Done</Button>
          </Form>
          <Form className="d-flex">
            <Button variant="outline-danger" onClick={()=>dispatch(SearchNotDone())}>Not Done</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;