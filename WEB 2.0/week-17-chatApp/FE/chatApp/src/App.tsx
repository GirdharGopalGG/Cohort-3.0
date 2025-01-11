import { useEffect, useState, useRef} from "react"

export default function App(){

  const inputRef = useRef<HTMLInputElement>(null)
  const wsRef = useRef()

  const [message,setMessage] = useState(['hilow','hey there!! ntmy','how is the day?'])

  const [input,setInput] = useState('')

  useEffect(()=>{
    const ws = new WebSocket('ws://localhost:8080')
    ws.onmessage = (message)=>{
      setMessage((m)=>[...m, message.data])
    }
    wsRef.current = ws
    ws.onopen = ()=>{
      ws.send(JSON.stringify({
      type:"join",
      payload:{
        roomId:"red"
      }
    }))
    }

    return ()=>{
      ws.close()
    }
  
  },[])

  const sendChat = ()=>{
    if(inputRef.current.value){
    wsRef.current.send(JSON.stringify({
        type:"chat",
        payload:{
          message:inputRef.current?.value
        }
      }))
      inputRef.current.value= ''
  }
}

  
  
   
  return <div className="h-screen flex flex-col">
    
 
    <div className="text-5xl flex justify-center">
      Chat App
    </div>
     <div className="flex flex-col flex-1 mt-4 overflow-hidden px-10  md:px-52">
    <div className="flex-1 overflow-y-auto pt-4 flex flex-col ">
      
     {
        message.map((m,key)=><div key={key} className="bg-red-300 rounded-md p-2 m-1 max-w-fit ">
          {m}
        </div>)
      }
      </div>
      
    <div className="p-1 flex justify-center gap-2 md:gap-10 items-center mb-2">
      <input ref = {inputRef} placeholder="chat here..." className="w-full focus:outline  outline-dashed outline-2 p-2 rounded-xl"
      onKeyUp={(e)=>{
        if(e.key === 'Enter'){
          sendChat()
        }
      }}
      />
      <div className="px-4 py-2 bg-red-500 flex justify-center items-center rounded-xl cursor-pointer mr-6"
      onClick={sendChat}
      
      
       >Send</div>
    </div>
  </div>
  </div>
}