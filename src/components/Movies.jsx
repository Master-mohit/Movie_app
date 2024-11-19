import axios from '../utills/axioss';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loaders from './Loaders';
import Dropdown from '../partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../partials/Card';
import Topnav from '../partials/Topnav';

const Movies = () => {

    const navigation = useNavigate();
    const [category, setcategory] = useState("now_playing")
    const [movie, setmovie] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true);

    const Getmovie = async() => {
        try {
         const {data} = await axios.get(`/movie/${category}?page=${page}`);
         
   
         if(data.results.length > 0){
           setmovie((prevstate) => [...prevstate, ...data.results])
           setpage(page + 1)
         }
         else {
         sethasMore(false)
         
        } 
        } catch (error) {
         console.log("Error",error);
        }
     };
     
     
   
     const refreshHandler = () => {
     if(movie.length === 0) {
       Getmovie();
     } else {
       setpage(1);
      setmovie([])
      Getmovie();
     }
     }
   
     useEffect(() => {
      refreshHandler();
     }, [category]);


  return movie.length > 0 ? (
    <div className='w-screen h-screen '>
     <div className='flex items-center px-[4%]'>
        <h1 className='text-3xl text-zinc-400 font-semibold'>
    <i onClick={()=> navigation(-1)}
     class="ri-arrow-left-line hover:text-[#6556CD]"></i>
     Movie<small className='ml-2 text-[20px] text-center'>({category})</small>
        </h1>

       <Topnav/>

       <Dropdown title="Category" 
       option={["popular", "top_reted", "upcoming", "now_playing"]} fun = {(e) => setcategory(e.target.value)}/>
         
     </div>
  <InfiniteScroll
    dataLength = {movie.length}
    next ={Getmovie}
    hasMore = {hasMore}
    loader = {<h1>Loading...</h1>}
    >
  <Card data ={movie} title={category}/>

  </InfiniteScroll>
    
    </div>
  ) : (
    <Loaders/>
  )
}

export default Movies
