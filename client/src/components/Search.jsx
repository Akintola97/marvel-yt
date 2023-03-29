import React from "react"
import axios from 'axios'
import { useState } from "react";
import View from "./View";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const pageRefresh = () =>{
    navigate(0);
  }
  
  
  const [character, setCharacter] = useState('');
  const [characterData, setCharacterData] = useState({});

  const handleSubmit = async(e) =>{
    e.preventDefault();

    const sendData = await axios.post('http://localhost:5000', {character})
    setCharacterData(sendData.data)
    console.log(characterData)

  }
  

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <div className='w-full h-full text-center p-5 cursor-pointer text-white'>
   <Link to = '/marvel-app' onClick={pageRefresh}><h1 className="p-5 text-[7.5vmin] font-bold cursor-pointer text-white">MARVEL CHARACTERS</h1></Link>
   
   
    <input className='border border-white rounded-md' onChange={e=>setCharacter(e.target.value)} type='text' required />
    <button className='rounded-md bg-green-500'>Search</button>
    <View characterInformation = {characterData.data}/>
    </div>
     <div className='w-full h-full text-center text-white'>
        {characterData.attributionText}
        </div>
    </form>
    </div>
  )
}

export default Search