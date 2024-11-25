import { useEffect, useState } from "react"

function App() {
  return <div> 
    <Toggler/>
 <Toggler/>
 <Toggler/>
 <Timer/>
 </div>

}

function Toggler(){
   const [visible, setVisible] = useState(true)

  return <div>
    <button onClick={()=>{
      setVisible(!visible)
    }}>Toggle msg </button>
    {visible && <p>this is conditionally rendered</p>}
  </div>
}

function Timer(){
  const [timer,setTimer] = useState(0)
  useEffect(()=>{
    setInterval(()=>{
    setTimer(c=>c+1)
  },1000)
  },[])
  return <div>
    <button onClick={()=>setTimer(c=>c+1)}>inc</button>
     {timer}
  </div>
}


export default App