import axios from '../utills/axioss';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loaders from './Loaders';
import Dropdown from '../partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../partials/Card';
import Topnav from '../partials/Topnav';

const Popular = () => {

    const navigation = useNavigate();
    const [category, setcategory] = useState("movie")
    const [popular, setpopular] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true);

    const Getpopular = async() => {
        try {
         const {data} = await axios.get(`${category}/popular?page=${page}`);
         // settranding(data.results)
   
         if(data.results.length > 0){
           setpopular((prevstate) => [...prevstate, ...data.results])
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
     if(popular.length === 0) {
       Getpopular();
     } else {
       setpage(1);
      setpopular([])
      Getpopular();
     }
     }
   
     useEffect(() => {
      refreshHandler();
     }, [category]);

  return popular.length > 0 ? (
    <div className='w-screen h-screen '>
     <div className='flex items-center px-[4%]'>
        <h1 className='text-3xl text-zinc-400 font-semibold'>
    <i onClick={()=> navigation(-1)}
     class="ri-arrow-left-line hover:text-[#6556CD] mr-2"></i>Popular</h1>

       <Topnav/>

       <Dropdown title="Category" option={["tv", "movie"]} fun = {(e) => setcategory(e.target.value)}/>
         
     </div>
  <InfiniteScroll
    dataLength = {popular.length}
    next ={Getpopular}
    hasMore = {hasMore}
    loader = {<h1>Loading...</h1>}
    >
  <Card data ={popular} title={category}/>

  </InfiniteScroll>
    
    </div>
  ) : (
    <Loaders/>
  )
}

export default Popular
