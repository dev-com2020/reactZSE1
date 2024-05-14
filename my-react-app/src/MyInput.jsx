import React from "react"

function MyInput() {
    const [changeMessage, setChangeMessage] = React.useState('')
    const [blurMessage, setBlurMessage] = React.useState('')

    const onChange = () => {
        setChangeMessage('zmiana!')
    }
    const onBlur = () => {
        setBlurMessage('opuszczam pole!')
    }
    return (<>
    <input onChange={onChange} onBlur={onBlur} />
    <p>{changeMessage}</p>
    <p>{blurMessage}</p>
    </>) 
}
export default MyInput
