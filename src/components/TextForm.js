import React from 'react'
import { useState } from 'react';


function TextForm(props) {
  const [text, setText] = useState("Hey.....!!!!");
  // const [alert, setAlert] = useState(null);
  const handleUpClick = ()=>{
      // console.log("UpperCase was Clicked");  
      let newText=text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to Upper Case..!!","success")

      
  }
  const handleDownClick =()=>{
    // console.log("LowerCase was Clicked");
    let smallText=text.toLowerCase();
    setText(smallText)
    props.showAlert("Converted to Lower Case..!!","success")
    
}

const handleClearClick =()=>{
  let smallText=("");
  setText(smallText)
  props.showAlert("Text Cleared..!!","warning")
  
}
const handleSpeechClick = () => {
let msg = new SpeechSynthesisUtterance();
msg.text = text;
window.speechSynthesis.speak(msg);   // good useful function...................................
props.showAlert("Please listen to your entered text..!!","warning")
}

const handleExtraSpaces=()=>{
let newText=text.split(/[ ]+/)
setText(newText.join(" "))
props.showAlert("Cleared extra Spaces","success")

}

// function handleBoldClick () {
//   let smallText=<b>{text.string}</b>

//   setText(smallText)

// }

  function handleOnChange(event) {
  // console.log("On Change");
  setText(event.target.value);
}

  
return (
  <>
  <div className="container" style={{color: props.mode===`light`?`#051725`:`white`}}>
      <h1> {props.heading}</h1>
        <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode===`light`?`white`:`grey`, color: props.mode===`light`?`#051725`:`white`}} id="MyBox" rows="8"></textarea>
      </div>
      <button className="btn btn-success" onClick={handleUpClick}>Convert to Upper Case </button>
      <button className="btn btn-success mx-2 " onClick={handleDownClick}>Convert to Lower Case </button>
      <button className="btn btn-success mx-2 " onClick={handleSpeechClick}>Speak </button>
      <button className="btn btn-success mx-2 " onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-danger mx-2 " onClick={handleClearClick}>Clear Text</button>
      
  </div>
  <div className="container my-3" style={{color: props.mode===`light`?`#051725`:`white`}}>
    <h1>Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").length} minutes required to read this</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter something in text box to preview it here....!!!!!'}</p>
  </div>
  </>
  )
}

export default TextForm