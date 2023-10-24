
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [isword,setWord]=useState(false)
  const hidden=()=>{
setWord(true);
  }

  return (
    <>
    

<div>
{!isword && <p className='text-center'>Hellow there</p> }

<button style={{width:'100px'}} type="button"  className='btn btn-info' onClick={hidden}>Click me</button>


</div>

    




    
    </>


      )
}

export default App
