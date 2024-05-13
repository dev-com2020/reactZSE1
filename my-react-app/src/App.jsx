import './App.css'
import MyButton from './MyButton'
import * as React from 'react'

function App() {
  const appState = {
    text: "My button",
    disabled: false,
    color: "green"
  }

  const [name, setName] = React.useState("loading...")
  const [age, setAge] = React.useState("loading...")

  const fetchUser = React.useCallback(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({name: "Tomek", age: 41})
      }, 2000)
    })
  },[])
  React.useEffect(() => {
    fetchUser().then((user) => {
      setName(user.name)
      setAge(user.age)
    })
  })

  return (
    <>
    {/* <MyButton text={appState.text} disabled={appState.disabled}
    color={appState.color}></MyButton> */}
    
    <input value={name} onChange={(e) => setName(e.target.value)}/>
    <input type='number' value={age} onChange={(e) => setAge(e.target.value)}/>

    <MyButton text={appState.text} disabled={appState.disabled}></MyButton>
    <p>Witaj {name}</p>
    <p>Masz {age} lat</p>
    </>
  )
}

export default App


// https://github.com/dev-com2020/reactZSE1