// import * as ReactDOM from "react-dom"

function Lista() {
    const array = ["Jeden", "Dwa", "Trzy"]
    const object = {
        first: 1,
        second: 2,
        third: 3
    }

    return (
       <>
            <ul>
                <h1>Array</h1>
                {array.map((i) => (
                    <li key={i}>{i}</li>
                ))}
            </ul>
            <h2>Object</h2>
            <ul>
                {Object.keys(object).map((i) => (
                    <li key={i}>
                        <strong>{i}: </strong>
                        {object[i]}
                    </li>
                ))}
            </ul>
        </>
    )
}
export default Lista