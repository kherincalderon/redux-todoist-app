import React from 'react';
import './App.css';
import Input from './components/Input'
import ToDoItem from './components/ToDoItem'

const toDoList = [{
  item: 'Task',
  done: false,
  id: 1
}, {
  item: 'Task 2',
  done: false,
  id: 2
}]

function App() {
  return (
    <div className="app">
      <div className='app__container '>
        <div className='app__toDoContainer'>
          {
            toDoList.map(item => (
              <ToDoItem />
            ))
          }
        </div>

        <Input />
      </div>
    </div>
  );
}

export default App;
