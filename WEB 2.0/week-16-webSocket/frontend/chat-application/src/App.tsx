import { useEffect, useRef, useState } from "react"

function App(){

  const [socket,setSocket] = useState()
  const inputRef = useRef()


  function sendMsg(){


    const msg= inputRef.current.value
    // @ts-ignore
    socket.send(msg)
  }


  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080')
    setSocket(ws)
    ws.onmessage = (event)=>{
      alert(event.data)
    }
  },[])   

  return <div>
    <input  ref={inputRef}  type="text" placeholder='enter msg...' />
    <button onClick={sendMsg}>send</button>
  </div>
}
export default App