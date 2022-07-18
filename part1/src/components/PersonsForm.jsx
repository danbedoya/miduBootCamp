import React from 'react'

const PersonsForm = ({handleOnChange, handleNumberOnChange, handleOnSubmit}) => {
  return (
    <form>
        <div>
         <h2>add new</h2>
          name: <input onChange={handleOnChange}/>
          <br />number: <input onChange={handleNumberOnChange}/>
        </div>
        <div>
          <button type="submit" onClick={handleOnSubmit}>add</button>
        </div>
      </form>
  )
}

export default PersonsForm