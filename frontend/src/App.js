import './App.css';
import CreateTodo from './pages/createtodo'
import ViewTodoList from './pages/viewtodolist'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/create' element={<CreateTodo/>}></Route>
        <Route path='/view' element={<ViewTodoList/>}></Route>
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
