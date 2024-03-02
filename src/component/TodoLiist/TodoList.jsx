import React from "react";
import TodoListItem from "../TodoListItem/TodoListItem";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
    const {tasks} = useSelector(store => store)
  return (
    <div>
      <h2 className="text-center">Todo List</h2>

      <div className="d-flex justify-content-between">
        <button className="btn btn-info w-25">All</button>
        <button className="btn btn-info w-25">Done</button>
        <button className="btn btn-info w-25">Active</button>
      </div>

      <ul className="mt-5">
        {tasks.map(t =>   <TodoListItem key={t.id} {...t} />)}
      </ul>
    </div>
  );
};

export default TodoList;
