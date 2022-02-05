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
