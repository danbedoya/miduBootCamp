import React from 'react'
import ReactDOM from 'react-dom'

//Forma corta
// const Title = ({course}) => <h1>{course}</h1>

const Header = ({name}) => (
  <h1>{name}</h1>
)

const Part = (props) => (
    <p>{props.name} {props.exercises}</p>
  )


const Total = ({parts}) => {
  let numberOfExercises = 0
  parts.forEach(part => {
    console.log(part.exercises)
    numberOfExercises += part.exercises
    console.log(numberOfExercises)
  })
  return(
    <p>Number of exercises {numberOfExercises}</p>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts:[{
    name:'Fundamentals of React',
    exercises:10},
    {name:'Using props to pass data',
    exercises:7},
    {name: 'State of a component',
    exercises:14}]}
  

  const Content = ({parts}) => {
    // const numberOfExercises = props.parts.map(exercise => exercise['exercises'] += exercise['exercises'])
    return(
    parts.map(part => <Part name = {part.name} exercises = {part.exercises}/>)
    )
  }

  return (
    <div>
      <Header name = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))