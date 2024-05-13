export default function MyButton({disabled, text, color='pink' }) {
    return <button disabled={disabled} style={{ backgroundColor: color}}>
        {text}</button>
  }