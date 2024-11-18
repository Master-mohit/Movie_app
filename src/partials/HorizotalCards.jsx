import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'

const HorizotalCards = ({data}) => {
  return (
       
      <div className=' w-[100%] flex overflow-y-hidden'>
      {data.map((d, i)=> <div 
      key={i} className='min-w-[16%] mr-5 mb-5 bg-zinc-900'>
        <img 
            className='w-full object-cover h-[55%] ' 
                src={`https://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}`} alt=''/>
     
     <div className=' text-white h-[55%] p-1'>
     <h1 className=' text-xl font-semibold '>
          {d.name || d.title || d.origninal_title || d.original_name}
        </h1>
        <p className=' mt-3'>
          {d.overview.slice(0, 35)}...<span className='text-zinc-300'>more</span>
        </p>
     </div>

      </div>)}
      </div>
 
  )
}

export default HorizotalCards
