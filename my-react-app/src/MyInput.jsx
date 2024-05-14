import React from "react"
import './MyInput.css'

function MyInput() {
    const [changeMessage, setChangeMessage] = React.useState('')
    const [blurMessage, setBlurMessage] = React.useState('')
    const [inputClass, setInputClass] = React.useState('')
    const [showImage, setShowImage] = React.useState(false)
    const [inputValue, setInputValue] = React.useState('')

    const onChange = (event) => {
        const value = event.target.value
        setInputValue(value)
        if (value === 'obraz'){
            setShowImage(true)
        } else {
            setShowImage(false)
        }
        setChangeMessage('zmiana!')
    }
    const onBlur = () => {
        setBlurMessage('opuszczam pole!')
        setInputClass('red-color')
    }

    const onFocus = () => {
        setShowImage(true)
    } 
    return (<>
    <br/><input 
    onChange={onChange} 
    onBlur={onBlur} 
    className={inputClass}
    onFocus={onFocus}
    value={inputValue}/><br/>
    {showImage && <img src="https://picsum.photos/200"/>}
    <p>{changeMessage}</p>
    <p>{blurMessage}</p>
    </>) 
}
export default MyInput
