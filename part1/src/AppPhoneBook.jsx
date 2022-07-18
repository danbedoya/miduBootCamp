import React, { useState } from 'react'
import Person from './components/Person'
import PersonsForm from './components/PersonsForm'
import Filter from './components/Filter'




const AppPhoneBook = () => {

  const [ persons, setPersons ] = useState([
    { 
      name: 'Arto Hellas',
      number: '777777777'
    },
    {
     name: 'Daniel Bedoya',
     number: '66666666' 
    },
    {
    name: 'Natalia Cardona',
    number:'8888888'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [number, setNumber] = useState('')
  const [nametoFind, setNameToFind] = useState('')

  const handleOnChange = (e) => {
      e.preventDefault();
      setNewName(e.target.value)
  }

  const handleNumberOnChange = (e) =>{
      e.preventDefault()
      setNumber(e.target.value)
  }

  const handleNameSearch = (e) => {
     e.preventDefault()
     setNameToFind(e.target.value)
     console.log(nametoFind)
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newNametoAdd = {
        name: newName,
        number: number
    }
    const alreadyExists = persons.find(p => p.name === newName)
    if(alreadyExists)
    {
        alert(`${newName} is already in the list`)

    }else{
        setPersons([...persons, newNametoAdd])
        setNewName("")
        setNumber("")
    }
    
  }

 

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with <input onChange={handleNameSearch}></input>
      <Filter persons={persons} nametoFind={nametoFind}/>
      <PersonsForm handleNumberOnChange={handleNumberOnChange} handleOnSubmit = {handleOnSubmit} handleOnChange={handleOnChange}/>
      <h2>Numbers</h2>
        {persons.map(p => (
            <Person key={p.name} name={p.name} number={p.number}/>
        ))}
      <div>debug: {newName}</div>
    </div>
  )
}

export default AppPhoneBook