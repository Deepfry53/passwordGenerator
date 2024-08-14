import { useState , useEffect, useRef , useCallback} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [length, setLength ] =useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password,setPassword] = useState ("");
  const passwordG = useCallback(()=>{
    let pass ="";
    let string = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(allowNum) str += "0123456789";
    if(allowChar) str+= "!@#$%^&*_";
    
    for (let index = 1; index < length; index++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass = str.charAt(char);
    }
    setPassword(pass);
    

  },[length,allowNum,allowChar,setPassword])

  return (
    <>
      <h1 className=' text-4xl text-center text-white ' >Password Generator</h1>
      <div className='  w-max  h-'></div>
    </>
  )
}

export default App
