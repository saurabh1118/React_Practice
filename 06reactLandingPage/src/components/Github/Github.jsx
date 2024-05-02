import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    
    const [data, setData]= useState([])
    useEffect(()=>{
       fetch('https:/api.github.com/users/saurabh1118') 
       .then(Response =>Response.json())
       .then(data=>{
        console.log(data);
        setData(data)
       })
    },[])
  return (
    <div className=' text-center bg-red-400 m-3 p-4 text-2xl '>
      Github Followers:{data.followers}
      <img className='rounded-2xl' src={data.avatar_url} alt='git picture' width={100}/>
    </div>
  )
}

export default Github


