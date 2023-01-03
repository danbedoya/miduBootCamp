import React from 'react'
import Person from './Person'

const Filter = ({persons, nametoFind}) => {
  return (
   <>
    {persons.filter(person => {
       return person.name === nametoFind
    }).map(person => (
        <Person key={person.name} name = {person.name} number={person.number} />
    ))}
</>
  )
}

export default Filter