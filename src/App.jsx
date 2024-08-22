import React from "react";
// import ReactDOM from 'react-dom';
import { multiply, divide, add, subtract } from "./Calc";
export default function App() {
  return (
    <>
      <h1>Hello, World!</h1>
      <h1>{`Sum of two number is  : ${add(3, 4)}`}</h1>
      <h1>{`Difference of two number is : ${subtract(3, 4)}`}</h1>
      <h1>{`Product of two number is : ${multiply(3, 4)}`}</h1>
      <h1>{`Division of two number is : ${divide(3, 4)}`}</h1>
    </>
  );
}
// export default App;
