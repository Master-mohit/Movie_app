import React from 'react'
import { Link } from 'react-router-dom'
import Trending from '../components/Trending'

const Sidenav = () => {
  return (
    <div className='w-[20%] h-full border-r-2 border-zinc-400 p-10'>
    <h1 className='text-2xl '>
    <i class="mr-3 text-[#6556CD] ri-tv-fill"></i>  
     <span className='text-white font-bold'>MNMA.</span>
    </h1>
      <nav className='flex flex-col gap-3 text-xl text-zinc-400'>
         <h1 className='text-white font-semibold mt-10 mb-5'>
             New Feeds
         </h1>
         <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4'> <i class=" mr-2 ri-fire-fill"></i>Trending</Link>
         <Link to="/popular" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4'><i class="mr-2 ri-bard-fill"></i>Popular</Link>
         <Link to="/movie" className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4'><i class=" mr-2 ri-movie-ai-fill"></i>Movies</Link>
         <Link  className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4'> <i class="mr-2 ri-tv-2-fill"></i>Tv Shows</Link>
         <Link  className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4'><i class="mr-2 ri-team-fill"></i>Peoples</Link>
      </nav>
        
        <hr/>

        <nav className='flex flex-col gap-3 text-xl text-zinc-400'>
        <h1 className='text-white font-semibold mt-10 mb-5'>
             Website Information
         </h1>
         <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4'> <i class=" mr-2 ri-contacts-fill"></i>About</Link>
         <Link  className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-4'><i class=" mr-2 ri-phone-fill"></i>Contact</Link> 
        </nav>
    </div>


  )
}

export default Sidenav
