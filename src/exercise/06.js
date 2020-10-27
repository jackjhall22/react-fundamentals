// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, { useState, useRef } from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputEl = useRef(null)
  // const [username, setUsername] = useState('');
  const [isValid, setError] = useState('');
  // 🐨 add a submit event handler here (`handleSubmit`).
  function handleSubmit(event) {
    onSubmitUsername(inputEl.current.value)
    event.preventDefault();
  }

  function handleChange(event) {
    const value = event.target.value;
    const isValid = value === value.toLowerCase()
    setError(isValid ? null : 'Username must be lower case');
  }
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0]
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input by specifying an `id` on
  // the input and a matching value as an `htmlFor` prop on the label.
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id='username' onChange={handleChange} ref={inputEl} type="text" />
      </div>
      <div role="alert" style={{color: 'red'}}>{isValid}</div>
      <button disabled={Boolean(isValid)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
