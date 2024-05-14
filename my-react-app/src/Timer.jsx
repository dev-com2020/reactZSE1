import * as React from 'react';

function Timer() {
    const initTime = 222
    const [timer, setTimer] = React.useState(100)

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => (prevTimer === 0 ? 0 : prevTimer - 1))
        }, 1000);

        return () => {
        clearInterval(interval)
    }
},[])

const resetTimer = () => {
    setTimer(initTime)
}
return (
<>
<p>Timer: {timer}</p>
<button onClick={resetTimer}>RESET</button>
</>
)

}
export default Timer