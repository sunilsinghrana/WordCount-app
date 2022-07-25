import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
     
    const wordCount = (content)=>{
        if(content===""){
          return 0;
        }
        let arr = content.split(" ");
        let len = arr.length;
        let count=0;
        
        for(let i=0;i<len;i++){
          if(arr[i]==='' || arr[i]===' '){
             count++;
          }
        }
        return len-count;
      }

        const handleupclick = ()=> {
            let newtext = text.toUpperCase();
            setText(newtext)
            props.showAlert("converted to uppercase", "success")
        }
        const handleloclick = ()=> {
            let newtext = text.toLowerCase();
            setText(newtext)
            props.showAlert("converted to lowercase", "success")
        }
        const handleonchange = (event)=>{
            setText(event.target.value)
        }
        const handleclearclick = ()=>{
            setText('')
            props.showAlert("Textarea is clear now", "success")
        }
        const [text, setText] = useState('')
        return (
        <>
            <div className="mb-3 container my-4">
                <p className='fs-1' >{wordCount(text)} words and {text.length} characters</p>
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} value={text} onChange={handleonchange} id="exampleFormControlTextarea1" rows="8"></textarea>
                <button className="btn btn-primary my-4 mx-2" onClick={handleupclick}>change to uppercase</button>
                <button className="btn btn-primary my-4 mx-2" onClick={handleloclick}>change to lowercase</button>
                <button className="btn btn-primary my-4 mx-2" onClick={handleclearclick}>clear text</button>
            </div>
            <div className="container">
                <h2>Preview</h2>
                <p className='border ' style={{minHeight: 75, backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}}>{text}</p>
            </div>
        </>
    )
}
