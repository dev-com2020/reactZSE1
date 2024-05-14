import './App.css'
import * as React from 'react'
import Timer from './Timer'

const ShowHideTimer = ({show}) => (show ? <Timer/> : null)

function App() {
  const [show,setShow] = React.useState(false)
  // const appState = {
  //   text: "My button",
  //   disabled: false,
  //   color: "green"
  // }

  // const [name, setName] = React.useState("loading...")
  // const [age, setAge] = React.useState("loading...")

  // const fetchUser = React.useCallback(() => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve({name: "Tomek", age: 41})
  //     }, 2000)
  //   })
  // },[])
  // React.useEffect(() => {
  //   fetchUser().then((user) => {
  //     setName(user.name)
  //     setAge(user.age)
  //   })
  // }, [fetchUser])

  return (
    <>
    <button onClick={() => setShow(!show)}>
      {show ? "Ukryj licznik": "Pokaz licznik"}
    </button>
    <ShowHideTimer show={show}/>

    {/* <MyButton text={appState.text} disabled={appState.disabled}
    color={appState.color}></MyButton> */}
    
    {/* <input value={name} onChange={(e) => setName(e.target.value)}/>
    <input type='number' value={age} onChange={(e) => setAge(e.target.value)}/>

    <MyButton text={appState.text} disabled={appState.disabled}></MyButton>
    <p>Witaj {name}</p>
    <p>Masz {age} lat</p> */}

    </>
  )
}
export default App


// https://github.com/dev-com2020/reactZSE1