import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({ data }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}`;

  return (
    <div style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.4)), 
                    url(${imageUrl})`,
        backgroundPosition: "start",
        backgroundSize: "cover",
        overflow: "hidden"
      }} 
      className='w-full h-[50vh] bg-slate-700 flex flex-col justify-end p-[2%] gap-3'>

        <h1 className='w-[70%] text-4xl font-black text-white '>{data.name || data.title || data.origninal_title || data.original_name}</h1>
        <p className='w-[70%] text-white '>{data.overview.slice(0, 200)}...<Link className='text-blue-400'>more</Link></p>
    </div>
  )
}

export default Header
