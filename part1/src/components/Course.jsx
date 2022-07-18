import React from "react";

const Part = ({ part }) => {
  return (
    <div>
      <span>
        {part.name} {part.exercises}
      </span>
    </div>
  );
};

const Content = ({ parts }) => {
  const total = parts.reduce((s, c) => {
    return s + c.exercises;
  }, 0);
  return (
    <div>
      {parts.map((part) => (
        <Part key={part.id} part={part} />
      ))}
      <span>
        <strong>Total of {total} exercises</strong>
      </span>
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <h1>{course.name}</h1>
            <Content parts={course.parts} />
          </div>
        );
      })}
    </div>
  );
};

export default Course;
