import React from "react";

const ClearTodo = () => {
  return (
    <div className="d-flex justify-content-between">
      <button className="btn btn-danger">Delete done tasks</button>
      <button className="btn btn-danger">Delete all tasks</button>
    </div>
  );
};

export default ClearTodo;
