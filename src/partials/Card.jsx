import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({data, title}) => {
  return (
    <div className='w-full h-full p-[5%] flex flex-wrap  bg-[#1F1E24]'>
      {data.map((c, i) => 
      <Link className='w-[25vh] mr-[3%] mb-[5%]' key={i}>
     
   <img className='shadow-[8px_17px_39px_2px_rgba(0,0,0,.5)] h-[40vh]' src={`https://image.tmdb.org/t/p/original/${c.poster_path || c.backdrop_path}`} alt=''/>
       <h1 className='text-2xl text-zinc-400 font-semibold mt-[4%]'>
       {c.name || c.title || c.origninal_title || c.original_name}
       </h1>
        
      </Link>)}
    </div>
  )
}

export default Card
