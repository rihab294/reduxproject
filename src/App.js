
import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AddTask />
      <ListTask />
      
    </div>
  );
}

export default App;
