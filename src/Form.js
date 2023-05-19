import { useState } from "react"

function Form(){
    const[text, setText]= useState("")
    const[subtext, setSubtext] = useState("")
    const updateText = (i) =>{
        // event.preventDefault()
        setText(i.target.value)
    }
    const submitHandler = (event) =>{
        event.preventDefault()
        setSubtext(text)
        setText("")
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" onChange={updateText} value={text}/>
                <button type="submit">Submit</button>
            </form>
            <h2>{subtext}</h2>
        </div>
    )
}

export default Form