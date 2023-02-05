import React, { useState } from "react";

const Handler = () => {
    const [text, setText] = useState('')
    const changeText = (event) => {
        setText(event.target.value)
    }
    const alertText = () => {
        alert('Isi Text : ' + text)
    }
    
    return(
        <div className="wrap">
            <h2>Test Event Handler</h2>
            <p>{text}</p>
            <input type="text" placeholder="Ketikkan Sesuatu Disini..." onChange={changeText}/>
            <button type="submit" onClick={alertText}>Submit</button>
        </div>
    )
};

export default Handler
