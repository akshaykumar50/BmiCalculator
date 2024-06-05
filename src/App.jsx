import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

import  './App.css'

function App() {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const[status , setStatus] = useState("initialStatus")


  const calculate = () =>{
    var result = weight / (height / 100)**2;
    console.log(result);

    var final = parseFloat(result).toFixed(2)
    console.log(final);

    if(weight > 0 && height >0){
      setBmi(final)

      if(final <18.5) {
        setStatus("Under Weight")
      }
      else if(final >= 18.5 && final<25){
        setStatus("Normal Weight")
      }
      else if(final >= 25 && final<30){
        setStatus("Over Weight")
      }
      else{
        setStatus("Obesity")
      }

    }
    else{
      alert('Invalid data')
    }
    
  }

  const reset =() =>{
    setHeight(0);
    setWeight(0);
    setBmi(0);
    setStatus("initialStatus")
  }



  return (
    <>
    <div className='bg p-4 d-flex justify-content-center align-items-center ' >
      <div className='blur  rounded p-5' style={{width:"fit-content"}} >
        <h2 className='heading text-warning text-center'>Body Mass Index</h2>
        <div className='resultSection border rounded d-flex justify-content-center align-items-center flex-column p-4 mt-4 ' style={{opacity:"0.6"}}>
          <h3 className='text-center'>{bmi == 0 ? 'Enter Details' : bmi}</h3> 
          <h4 id=''>{status=="initialStatus" ? "" : status}</h4>
        </div>
        <div className='mt-4 d-flex flex-column'>

          <TextField id="outlined-basic" label="Height (cm)" type='number'  value={height || " "}
            onChange={(e)=>{
              /* console.log(e.target.value); */
              setHeight(e.target.value);
          }} variant="outlined" />

          <TextField id="outlined-basic" label="Weight (kg)" type='number' value={weight || " "}
            onChange={(e) => {
              /* console.log(e.target.value); */
              setWeight(e.target.value);
          }} variant="outlined" className='mt-4' />

        </div>
        <div className='mt-4 mx-4 d-flex justify-content-between align-items-center'>
          <button className='btn btn-success m-2 ' onClick={calculate}>Calculate</button>
          <button className='btn btn-danger m-2 ' onClick={reset}>Reset</button>
        </div>

      </div>
    </div>
    
    </>
  )
}

export default App