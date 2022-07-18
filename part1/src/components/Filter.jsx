import React from 'react'
import Person from './Person'

const Filter = ({persons, nametoFind}) => {
  return (
    <div><div>
    {persons.filter(person => {
       return person.name === nametoFind
    }).map(person => (
        <Person key={person.name} name = {person.name} number={person.number} />
    ))}
</div></div>
  )
}

export default Filter