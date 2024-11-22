import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Notfound from '../components/Notfound'

const Trailer = () => {
    const navigate=useNavigate();
   const {pathname} = useLocation()
   const category = pathname.includes('movie') ? "movie" : "tv";
    const ytvideo = useSelector(state=> state[category].info.videos);
    console.log(ytvideo);
    
    
  return ytvideo ? (
    <div className='bg-[rgba(0,0,0,.9)] absolute z-[100] top-0 left-0 w-screen h-screen
    flex items-center justify-center'>
        <Link
          onClick={() => navigate(-1)}
          className="ri-close-fill hover:text-[#6556CD] text-white text-3xl absolute
          right-[5%] top-[5%]"
        ></Link>
      <ReactPlayer
         height={600}
         width={1300}
       url={`https://www.youtube.com/watch?v=${ytvideo.key}`} />
    </div>
  ) : <Notfound />
}

export default Trailer
