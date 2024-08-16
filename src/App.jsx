import { useState , useEffect, useRef , useCallback} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [length, setLength ] =useState(8);
  const [allowNum, setAllowNum] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password,setPassword] = useState ("");
  //ref hook
  
  const passwordref = useRef(null);
  const passwordG = useCallback(()=>{
    let pass ="";
    let string = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(allowNum) string += "0123456789";
    if(allowChar) string+= "!@#$%^&*_";
    
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(char);
    }
    setPassword(pass);

  },[length,allowNum,allowChar,setPassword])

  const Copytoclip = useCallback(()=>{
    passwordref.current?.select()
    // passwordref.current?.setSelectionRange(0,2)
  window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{passwordG()},[length,allowNum,allowChar,passwordG])

  return (
    <>
      <div className=' items-center justify-center bg-gray-50 bg-opacity-10 backdrop-filter  border border-white/30 rounded-lg p-6'>
        <h1 className='text-white p-3  m-3 text-center text-4xl'>Password Generator</h1>


       <div className='flex w-1/2 mx-[25%] shadow rounded-lg overflow-hidden'>
       <input 
        type="text"
        value={password}
        className='bg-opacity-20 backdrop-filter bg-white outline-none w-full py-1 px-3 ' 
        placeholder='Password'
        readOnly
        ref={passwordref}
        />|
        <button className=' bg-blue-400 w-1/3 text-black' 
        onClick={Copytoclip}
        >copy</button>
       </div>

       <div
       className=' grid grid-cols-1 bg-white text-sm   mx-[20%] p-2  bg-opacity-10 backdrop-filter  m-4 rounded-lg md:grid-cols-3 sm:grid-cols-1 lg:grid-cols-3' 
       >
        
          {/* length range  */}

      <div className=''>
      <input
        type="range"
        min={6}
        max={30}
        value={length} 
        className=' cursor-pointer  '
        onChange={(e)=>{setLength(e.target.value)}}
        />
       <label 
       className='text-white ml-5'
       >Length:{length}</label>
          </div>
        

        {/* Check number  */}

        <div>

      <input
        type="checkbox" 
        defaultChecked={allowNum}
        id="numberInput"
        onChange={()=>{setAllowNum((prev) => !prev)}}

        /> 
       <label
       className='text-white ml-5'
       >Allow Number </label>
        </div>


          {/* Check number  */}

          <div>

      <input
        type="checkbox" 
        defaultChecked={allowChar}
        id="numberInput"
        onChange={()=>{setAllowChar((prev) => !prev)}}
        /> 
       <label
       className='text-white ml-5'
       >Allow Character </label>
          </div>

      

       </div>

      </div>
    </>
  )
}

export default App
