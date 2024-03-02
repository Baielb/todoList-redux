import React from 'react'
import TodoHeader from './component/TodoHeader/TodoHeader'
import TodoList from './component/TodoLiist/TodoList'
import ClearTodo from './component/ClearTodo/ClearTodo'

const App = () => {
  return (
    <div className='mx-auto' style={{width: 600}}>
      <TodoHeader />
      <TodoList />
      <ClearTodo />
    </div>
  )
}

export default App
