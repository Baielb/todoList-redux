import React from "react";

const TodoListItem = (props) => {
  return (
    <li className="list-item mb-3 d-flex align-items-center justify-content-between">
      <span>{props.title}</span>
      <span className="d-flex gap-2 ">
        <button className="btn btn-success"><i class="bi bi-check-all"></i></button>
        <button className="btn btn-danger"><i class="bi bi-trash3-fill"></i></button>
      </span>
    </li>
  );
};

export default TodoListItem;
