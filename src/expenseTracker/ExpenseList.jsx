import React from "react";
import { memo } from "react";

const ExpenseList = (props) => {
  console.log("list");
  return (
    <div>
      <div>
        <ul class="list-group list-group-flush">
          {props?.expense?.length ? (
            props?.expense?.map((e, i) => (
              <h3>
                {" "}
                <li key={i} class="list-group-item">
                  {e?.name} : ₹ {e?.amount}.00
                </li>
              </h3>
            ))
          ) : (
            <h4>No item found</h4>
          )}
        </ul>
      </div>
    </div>
  );
};

export default memo(ExpenseList);
