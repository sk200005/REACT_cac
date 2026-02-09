import { useState, useCallback, useEffect, useRef} from "react";

export default function Password() {

    const [length, setlength] = useState(8);
    const [numAllow, setNumAllow] = useState(false);
    const [charAllow, setCharAllow] = useState(false);
    const [password, setPassword] = useState("")

    const passwordGenerator = useCallback(() => {
        let password = "";
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

        if(numAllow) str += "0123456789";
        if(charAllow) str += "!@#$%^&*()|~₹?";

        for(let i = 1 ; i < length; i++){
            let idx = Math.floor(Math.random() *str.length)
            password += str.charAt(idx)
        }

        setPassword(password)
         
    }, [length, numAllow, charAllow])

    const copyToClipboard = useCallback(() => {
      passRef.current?.select()
      //passRef.current?.setSelectionRange(0,3)
      window.navigator.clipboard.writeText(password)
    }, [password])
     
  useEffect (() => { length,numAllow,charAllow, passwordGenerator() } , [passwordGenerator])

  const passRef = useRef(null)   //defult value is null


  return (
        //  SCREEN
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {/* MAIN BOX */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">

        {/* Password box  + Copy option  */}
        <div className="flex gap-2 mb-4">
          <input 
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
          type="text"  
          value={password} 
          placeholder="password" 
          readOnly
          ref={passRef}/>

          {/* button */}
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={copyToClipboard}>
            Copy
          </button>
        </div>

        {/* Options */}
        <div className="space-y-2 text-sm">

            {/* Numeric Input*/}
          <label className="flex items-center gap-2">
            <input 
            type="checkbox" 
            className="w-4 h-4 accent-blue-600" 
            checked = {numAllow} 
            id="numInput" 
            onChange={()=>{setNumAllow( (prev) => !prev  )}}/>
            Include numeric characters
          </label>

            {/* Character Input*/}
          <label className="flex items-center gap-2">
            <input 
            type="checkbox" 
            className="w-4 h-4 accent-blue-600" 
            checked = {charAllow} 
            id="charInput" 
            onChange={()=>{setCharAllow( (prev) => !prev )}} />
            Include special characters
          </label>

           {/* Length Slider */}
          <input 
          type="range" 
          className="cursor-pointer" 
          min={6} max={50} 
          value={length} 
          onChange={(e)=>{setlength(Number(e.target.value))}}/>
         <br /><label > 
            
            Length : {length}</label>
        </div>
      </div>
    </div>
  );
}
