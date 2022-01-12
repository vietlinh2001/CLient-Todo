import React, { FC, useState } from 'react';
import AddTodo from './components/AddTodo';
import Statistic from './components/Statistic';
import TodoList from './components/TodoList';
import { TodoData } from './TodoData';



const App: FC = () => {

  const [todos, setTodos] = useState<TodoData[]>([
    {
      id: 1,
      name: 'todo1',
      done: true
    },
    {
      id: 2,
      name: 'todo2',
      done: false
    },
    {
      id: 3,
      name: 'todo3',
      done: false
    },
    {
      id: 4,
      name: 'todo4',
      done: false
    },
    {
      id: 5,
      name: 'todo5',
      done: true
    },
    
  ])

  return (
    <>
      <Statistic 
        done={todos.filter(todo => todo.done).length} 
        total={todos.length} 
      />

      <TodoList 
        todos={todos}
        onTodoUpdated={(id, done) => {
            const newUpdatedTodos = todos.map((todo) => {

              if (todo.id === id) {
                return {
                  ...todo,
                  done
                }
              }

              return todo
            })

            setTodos(newUpdatedTodos)
        }} 
      />
      
      <button onClick={() => {
        setTodos(todos.filter(todo => !todo.done))
      }}>
          Clear
      </button>


      <AddTodo 
        onNewTodo={todoName => {
          setTodos([...todos, { name: todoName, done: false, id: new Date().getTime() }])
        }} 
      />
    </>

  );
}

export default App;
