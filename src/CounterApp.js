import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="container py-5 my-5">
        <div className="card text-center p-5 m-5">
            <div className="card-body">
              <h1 className="text-muted">Counter App</h1>
              <div className="container-content p-5 m-5">
                <div className="d-flex justify-content-around align-items-center m-5 p-5">
                  <button className="btn btn-danger" onClick={() => setCount(count - 1)} disabled = {count === 0}>-</button>
                  <h2>{count}</h2>
                  <button className="btn btn-success" onClick={() => setCount(count + 1)}>+</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
}

export default Counter;
