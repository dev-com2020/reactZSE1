import MyButton from "./MyButton"

function Hello() {
    const appState = {
        text: "KLIKNIJ",
        disabled: false,
        color: "red"
      }
    return (
            <>
            <p>Tu jest nowy przycisk</p>
                <MyButton text={appState.text} 
                disabled={appState.disabled}
                color={appState.color}></MyButton>
            </>
    )
}
export default Hello