import React, { useReducer, useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpensePrice from "./ExpensePrice";

const ExpenseForm = () => {
  let [itemName, setItemName] = useState("");
  let [itemAmount, setItemAmount] = useState("");
  let array = [];
  let [expense, dispatch] = useReducer(reducer, array);

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_EXPENSE":
        if (itemName === "" || itemAmount === "") {
          alert("Please enter the datails....");
        } else {
          setItemName("");
          setItemAmount("");
          return [
            ...state,
            {
              name: action?.payload?.itemName,
              amount: action?.payload?.itemAmount,
            },
          ];
        }

      case "CLEAR_ITEM":
        return (state = []);

      default:
        return state;
    }
  }

  let addItem = () => {
    dispatch({
      type: "ADD_EXPENSE",
      payload: { itemName, itemAmount },
    });
  };

  let clearAll = () => {
    dispatch({ type: "CLEAR_ITEM" });
  };

  return (
    <div className="col-md-6 m-auto">
      <h1>Expense Tracker</h1>
      <div>
        <label>Item Name </label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter item name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <label>Item Amount </label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter item amount"
          value={itemAmount}
          onChange={(e) => setItemAmount(e.target.value)}
        />
        <button className="btn btn-primary mt-4" onClick={addItem}>
          Add Item
        </button>{" "}
        <button className="btn btn-primary mt-4" onClick={clearAll}>
          Clear all
        </button>
      </div>
      <div className="mt-3">
        <ExpenseList expense={expense}></ExpenseList>
      </div>
      <div className="mt-3">
        <ExpensePrice expense={expense}></ExpensePrice>
      </div>
    </div>
  );
};

export default ExpenseForm;
