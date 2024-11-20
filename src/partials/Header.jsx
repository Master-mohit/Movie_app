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
        overflow: "hidden",
        backgroundRepeat: "no-repeat"
      }} 
      className='w-full h-[50vh] bg-slate-700 flex flex-col justify-end items-start p-[2%] gap-3'>

        <h1 className='w-[70%] text-5xl font-black text-white '>
          {data.name || data.title || data.origninal_title || data.original_name}
        </h1>
        <p className='w-[70%] text-white mt-3'>
          {data.overview.slice(0, 200)}...<Link to={`/${data.media_type}/details/${data.id}`} 
          className='text-blue-400'>more</Link>
        </p>

         <p className='text-white'>
         <i class="ri-megaphone-fill text-yellow-500"></i>{data.release_date || "Not Present"}
         <i class="ml-5 ri-disc-fill text-yellow-500"></i>{data.media_type.toUpperCase()}
         </p>

         <Link className='text-white bg-[#6556CD] p-4'>
        Watch Trailer
         </Link>

    </div>
  )
}

export default Header
