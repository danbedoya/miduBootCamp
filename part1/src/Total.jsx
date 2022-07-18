import React from "react";

const Total = ({ parts }) => {
  let numberOfExercises = 0;
  parts.forEach((part) => {
    numberOfExercises += part.exercises;
  });
  return (
    <div>
      <p>Number of exercises {numberOfExercises}</p>
    </div>
  );
};

export default Total;

/* Contador Example

import ReactDOM from "react-dom";
import { useState } from "react";

const Contador = ({ number }) => <h1>{number}</h1>;

const App = (props) => {
  const [contador, setContador] = useState(0);

  

  // const handleOnClick = (tipo) => {
  //   if (tipo === "incrementar") {
  //     return () =>
  //       setContador((prevContador) => {
  //         return prevContador + 1;
  //       });
  //   } else if (tipo === "reset") {
  //     return () => setContador(0);
  //   }
  // };

  const isEven = contador % 2 === 0;

  return (
    <div>
      <Contador number={contador} />
      <p>{isEven ? "is Even" : "is Odd"}</p>
      <button onClick={handleOnClick("incrementar")}>incrementar</button>
      <button onClick={handleOnClick("reset")}>Reset</button>
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);

return (
    <div>
      <Contador number={contador} />
      <p>{isEven ? "is Even" : "is Odd"}</p>
      <button onClick={handleOnClick.incrementar}>incrementar</button>
      <button onClick={handleOnClick.reset}>Reset</button>
    </div>
  );
};

*/
