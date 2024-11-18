import React, { useEffect, useState } from 'react';
import Sidenav from '../partials/Sidenav';
import Topnav from '../partials/Topnav';
import axios from '../utills/axioss';
import Header from '../partials/Header';
import HorizotalCards from '../partials/HorizotalCards';
import Dropdown from '../partials/Dropdown';
import Loaders from './Loaders';

const Home = () => {
  const [wallpaper, setwallpaper] = useState(null);
  const [trending, settrending] = useState([]);
  const [category, setcategory] = useState("all")

  const haderWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`);
      const randomdata = data.results[Math.floor(Math.random() * data.results.length)];
      setwallpaper(randomdata); 
    } catch (error) {
      console.log("Error", error);
    }
  };

  const gettrending = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/day`);
      settrending(data.results); 
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    gettrending();
    if (!wallpaper) haderWallpaper();
   
  }, [category]);

  return wallpaper && trending.length ? (
    <>
      <Sidenav />
      <div className='w-[80%] overflow-auto overflow-x-hidden'>
        <Topnav />
        <Header data={wallpaper} />

        <div className='mb-5 flex justify-between items-center p-4'>
            <h1 className='font-semibold text-3xl text-zinc-400'>Trending</h1>
            <Dropdown title = "Filter" option={["tv", "movie", "all"]} fun={(e) => setcategory(e.target.value)}/>
        </div>

        <HorizotalCards data={trending} />
      </div>
    </>
  ) : (
    <Loaders/>
  );
};

export default Home;
