import React from "react";
import { memo } from "react";

const ExpensePrice = (props) => {
  let a = props?.expense?.reduce((a, c) => {
    return a + Number(c?.amount);
  }, 0);
  console.log("count");
  return (
    <div>
      <h3>Total : ₹ {a}</h3>
    </div>
  );
};

export default memo(ExpensePrice);
