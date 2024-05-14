import React from "react"
import './MyInput.css'

function MyInput() {
    const [changeMessage, setChangeMessage] = React.useState('')
    const [blurMessage, setBlurMessage] = React.useState('')
    const [inputClass, setInputClass] = React.useState('')

    const onChange = () => {
        setChangeMessage('zmiana!')
    }
    const onBlur = () => {
        setBlurMessage('opuszczam pole!')
        setInputClass('red-color')
    }
    return (<>
    <input onChange={onChange} onBlur={onBlur} className={inputClass}/>
    <p>{changeMessage}</p>
    <p>{blurMessage}</p>
    </>) 
}
export default MyInput
