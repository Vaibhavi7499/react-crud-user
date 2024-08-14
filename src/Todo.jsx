import React, { useState } from "react";

const Todo = () => {
  let [inpt, setInpt] = useState("");
  let [todo, setTodo] = useState([]);
  let [isUpdate, setIsUpdate] = useState(false);
  let [oldValues, setOldValues] = useState("");

  let addTodo = () => {
    if (isUpdate) {
      todo = todo.map((ele) => {
        if (ele === oldValues) {
          return setTodo(inpt);
        }else{
            return ele
        }
      });
    } else {
      setTodo([...todo, inpt]);
      setInpt("");
    }
  };

  function deleteItem(ele) {
    let a = todo.filter((e) => {
      return e !== ele;
    });
    setTodo(a);
  }

  function updateItem(e) {
    setInpt(e);
    setOldValues(e);
    setIsUpdate(true);   
  }

  return (
    <div className="col-md-8 m-auto">
      <h1>Todo</h1>
      <input type="text" onChange={(e) => setInpt(e.target.value)} />{" "}
      <button className="btn btn-primary" onClick={addTodo}>
        Add
      </button>
      <div className="col-md-8">
        <ol className="list-group">
          {todo?.map((e) => (
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div>{e}</div>
              <span>
                <button
                  className="btn btn-success"
                  onClick={() => updateItem(e)}
                >
                  update
                </button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() => deleteItem(e)}
                >
                  delete
                </button>
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Todo;
