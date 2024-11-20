import axios from '../utills/axioss';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loaders from './Loaders';
import Dropdown from '../partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../partials/Card';
import Topnav from '../partials/Topnav';


const Tv = () => {

    const navigation = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tv, settv] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true);

    const Gettv = async() => {
        try {
         const {data} = await axios.get(`/tv/${category}?page=${page}`);
         
   
         if(data.results.length > 0){
           settv((prevstate) => [...prevstate, ...data.results])
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
     if(tv.length === 0) {
       Gettv();
     } else {
       setpage(1);
      settv([])
      Gettv();
     }
     }
   
     useEffect(() => {
      refreshHandler();
     }, [category]);


  return tv.length > 0 ? (
    <div className='w-screen h-screen '>
     <div className='flex items-center px-[4%]'>
        <h1 className='text-3xl text-zinc-400 font-semibold'>
    <i onClick={()=> navigation(-1)}
     class="ri-arrow-left-line hover:text-[#6556CD]"></i>
     Tv<small className='ml-2 text-[20px] text-center'>({category})</small>
        </h1>

       <Topnav/>

       <Dropdown title="Category" 
       option={["on_the_air", "popular", "top_rated", "airing_today"]} fun = {(e) => setcategory(e.target.value)}/>
         
     </div>
  <InfiniteScroll
    dataLength = {tv.length}
    next ={Gettv}
    hasMore = {hasMore}
    loader = {<h1>Loading...</h1>}
    >
  <Card data ={tv} title="tv"/>

  </InfiniteScroll>
    
    </div>
  ) : (
    <Loaders/>
  )
}

export default Tv
