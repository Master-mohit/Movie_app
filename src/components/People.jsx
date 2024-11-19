import axios from '../utills/axioss';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loaders from './Loaders';
import Dropdown from '../partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Card from '../partials/Card';
import Topnav from '../partials/Topnav';

const People = () => {

    const navigation = useNavigate();
    const [category, setcategory] = useState("popular");
    const [people, setpeople] = useState([])
    const [page, setpage] = useState(1)
    const [hasMore, sethasMore] = useState(true);

    const Getpeople = async() => {
        try {
         const {data} = await axios.get(`/person/${category}?page=${page}`);
         
   
         if(data.results.length > 0){
           setpeople((prevstate) => [...prevstate, ...data.results])
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
     if(people.length === 0) {
       Getpeople();
     } else {
       setpage(1);
      setpeople([])
      Getpeople();
     }
     }
   
     useEffect(() => {
      refreshHandler();
     }, [category]);


  return people.length > 0 ? (
    <div className='w-screen h-screen '>
     <div className='flex items-center px-[4%]'>
        <h1 className='text-3xl text-zinc-400 font-semibold'>
    <i onClick={()=> navigation(-1)}
     class="ri-arrow-left-line hover:text-[#6556CD]"></i>
     People<small className='ml-2 text-[20px] text-center'>({category})</small>
        </h1>

       <Topnav/>

     </div>
  <InfiniteScroll
    dataLength = {people.length}
    next ={Getpeople}
    hasMore = {hasMore}
    loader = {<h1>Loading...</h1>}
    >
  <Card data ={people} title={category}/>

  </InfiniteScroll>
    
    </div>
  ) : (
    <Loaders/>
  )
}

export default People
