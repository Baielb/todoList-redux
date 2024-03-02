import React from 'react'

const TodoHeader = () => {
  return (
    <div className='card p-3'>
        <h2 className='text-center'>Todo Input</h2>
      <input className='form-control mb-3' type="text" placeholder='new todo' />
      <button className='btn btn-info w-100'>add new task </button>
    </div>
  )
}

export default TodoHeader
