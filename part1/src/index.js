import React from "react";
import ReactDOM from "react-dom";
import AnecdotesApp from "./AnecdotesApp";
import AppNotes from "./AppNotes";
import ClientsFeedbackCoffee from "./ClientsFeedbackCoffee";
import AppCourseInfo from "./AppCourseInfo";
import AppPosts from "./AppPosts";
import AppPhoneBook from "./AppPhoneBook";
import AppCountries from "./AppCountries";
//Forma corta
// const Title = ({course}) => <h1>{course}</h1>

// const Total = ({ parts }) => {
//   let numberOfExercises = 0;
//   parts.forEach((part) => {
//     console.log(part.exercises);
//     numberOfExercises += part.exercises;
//     console.log(numberOfExercises);
//   });
//   return <p>Number of exercises {numberOfExercises}</p>;
// };

// props for Anecdotes App
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
    categories: ["sports", "news"],
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

ReactDOM.render(<AppNotes />, document.getElementById("root"));
