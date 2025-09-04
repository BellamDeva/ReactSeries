import { useCallback, useState,useEffect,useRef } from "react";
import "./index.css";

function App() {
  const[length,setLength] = useState(8);
  const[isNumberAllowed,setIsNumberAllowed] = useState(false);
  const[isCharacterAllowed,setIsCharacterAllowed] = useState(false);
  const[password,setPassword] = useState("");
  const focusOnpassword = useRef(null);
  const generatePassword = ()=>{
    let result = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(isNumberAllowed){
      str +="0123456789";
    }
    if(isCharacterAllowed){
      str += "!@#$%^&*()_+-=[]{}|;:',.<>/?`~";
    }
    for(let i = 0 ; i < length ; i++){
        let rand = Math.floor(Math.random()*str.length);
        console.log(rand);
        result += str.charAt(rand);
    }
    setPassword(result);
  }
  useEffect(() => {
    generatePassword();
  }, [length, isNumberAllowed, isCharacterAllowed]);


  const handleOnClick = ()=>{
    window.navigator.clipboard.writeText(password);
    alert("copied");
  }


  return (

    <>
      <div
        id="container"
        className="bg-black h-screen w-full flex flex-col items-center justify-center"
      >
        <div className="text-white border-5 p-10">
          <h1 className="text-white text-4xl font-bold ">
          Generate Password
        </h1>
        
        <input type="text"  
        value = {password}
        className="px-2 m-4 rounded-2xl bg-amber-100 text-black h-10 w-1/2 "
        readOnly />
        <button className="bg-blue-500 rounded p-1" onClick={handleOnClick}>copy</button>
        <br/>
        <input type="range" name="rangefunc" onChange={(e)=>{setLength(e.target.value)}}/>
        <label htmlFor="rangefunc" className="m-3">Length : {length}</label>

        {/* for the numbers */}
        <input type="checkbox" name="forNumber" onChange = {()=>setIsNumberAllowed((prev)=>!prev)} />
        <label htmlFor="forNumber" className="m-3" >Numbers</label>
        {/* for the characters */}
        
        <input type="checkbox" name="forCharacter" onChange = {()=>setIsCharacterAllowed((prev)=>!prev)}/>
        <label htmlFor="forCharacter">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App;
