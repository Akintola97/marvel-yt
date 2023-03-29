import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'




const About = () => {

    const {id} = useParams();
    const [aboutData, setAboutData] = useState({});
    const imageSize = 'standard_fantastic'
    const navigate = useNavigate()

    const goBack = ()=>{
      navigate(-1)
    }

   
  useEffect(()=>{
    const fetchData = async() =>{
     const response = await axios.post('https://marvel-yt-app.onrender.com', {id})
    setAboutData(response.data.data)
    }
    fetchData()
  }, [id])

  return (
    <>
    <div>
      {aboutData.results && aboutData.results.map((data)=>{
        return (
          <>
          <div className='p-3 text-white'>
            <div className='flex justify-center'>
         <img key={data.id} src={`${data.thumbnail.path}/${imageSize}.${data.thumbnail.extension}`} alt={data.name} />
        </div>
        <h1 className='text-center text-[8vmin] py-3 font-bold'>{data.name}</h1>
        <p className='px-5 text-center text-[3.5vmin]'>{data.description ? data.description : "No description is available at this time"}</p>
        </div>
      <div className='text-white'>
      <h1 className='text-center text-[3.75vmin] font-bold'>{data.name}'s Comics</h1>
      <ul className='p-3 flex flex-wrap justify-center'>
                {data.comics.items.map((comics)=>{
                  return(
                    <div>
                      <li className='text-center py-2 md:p-5'>
                        <p className='text-[2.25vmin]' key={comics.id}>{comics.name}</p>
                      </li>
                    </div>
                  )
                })}


      </ul>
      {/* <div className='text-center w-full h-full'>
               <button onClick={goBack} className='bg-green-500 p-1.5 rounded-md'>Search</button>
               </div> */}
<div className='text-center w-full h-full'>
  <button onClick={goBack} className='bg-green-500 p-1.5 rounded-md'>Search</button>
</div>
      </div>
        
        </>
        )
      })}
    </div>
    </>
  )
}

export default About