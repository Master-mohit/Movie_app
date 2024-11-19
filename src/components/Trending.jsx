import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from '../partials/Topnav'
import Dropdown from '../partials/Dropdown'
import axios from '../utills/axioss'
import Card from '../partials/Card'
import Loaders from '../'

const Trending = () => {
    const navigation = useNavigate();
    const [category, setcategory] = useState("all")
    const [duration, setduration] = useState("day")
    const [tranding, settranding] = useState([])
 
  const GetTranding = async() => {
     try {
      const {data} = await axios.get(`/trending/${category}/${duration}`);
      settranding(data.results)
     } catch (error) {
      console.log("Error",error);
     }
  }
  console.log(tranding);

  useEffect(() => {
   GetTranding();
  }, [category, duration])
  

  return trending.length > 0: (
    <div className='w-screen h-screen overflow-hidden overflow-y-auto  '>
     <div className='flex items-center px-[3%]'>
        <h1 className='text-3xl text-zinc-400 font-semibold'>
    <i onClick={()=> navigation(-1)}
     class="ri-arrow-left-line hover:text-[#6556CD] mr-2"></i>Trending</h1>

       <Topnav/>

       <Dropdown title="Category" option={["tv", "movie", "all"]} fun = {(e) => setcategory(e.target.value)}/>
         <div className='w-[3%]'></div>
       <Dropdown title="Duration" option={["week", "day"]} fun = {(e) => setduration(e.target.value)}/>
     </div>

     <Card data ={tranding} title={category}/>
    </div>
  ) :(
   <Loaders/>
  )
}

export default Trending
