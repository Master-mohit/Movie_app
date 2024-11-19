import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from '../partials/Topnav'
import Dropdown from '../partials/Dropdown'
import axios from '../utills/axioss'
import Card from '../partials/Card'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loaders from './Loaders'


const Trending = () => {
    const navigation = useNavigate();
    const [category, setcategory] = useState("all")
    const [duration, setduration] = useState("day")
    const [tranding, settranding] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true);
 
  const GetTranding = async() => {
     try {
      const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      // settranding(data.results)

      if(data.results.length > 0){
        settranding((prevstate) => [...prevstate, ...data.results])
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
  if(tranding.length === 0) {
    GetTranding();
  } else {
    setpage(1);
   settranding([])
   GetTranding();
  }
  }

  useEffect(() => {
   refreshHandler();
  }, [category, duration]);
  

  return tranding.length > 0 ? (
    <div className='w-screen h-screen '>
     <div className='flex items-center px-[4%]'>
        <h1 className='text-3xl text-zinc-400 font-semibold'>
    <i onClick={()=> navigation(-1)}
     class="ri-arrow-left-line hover:text-[#6556CD] mr-2"></i>Trending</h1>

       <Topnav/>

       <Dropdown title="Category" option={["tv", "movie", "all"]} fun = {(e) => setcategory(e.target.value)}/>
         <div className='w-[3%]'></div>
       <Dropdown title="Duration" option={["week", "day"]} fun = {(e) => setduration(e.target.value)}/>
     </div>
  <InfiniteScroll
    dataLength = {tranding.length}
    next ={GetTranding}
    hasMore = {hasMore}
    loader = {<h1>Loading...</h1>}
    >
  <Card data ={tranding} title={category}/>

  </InfiniteScroll>
    
    </div>
  ) : (
    <Loaders/>
  )
}

export default Trending
