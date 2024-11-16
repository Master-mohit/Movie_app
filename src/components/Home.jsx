import React, { useEffect, useState } from 'react'
import Sidenav from '../partials/Sidenav'
import Topnav from '../partials/Topnav'
import axios from '../utills/axioss'
import Header from '../partials/Header'

const Home = () => {
  const [wallpaper, setwallpaper] = useState(null)

  const haderWallpaper = async () => {
    try {
      const { data } = await axios.get(`trending/all/day`)
      // Assuming each result has an 'image' or 'poster_path' field
      const randomdata = data.results[Math.floor(Math.random() * data.results.length)];
      setwallpaper(randomdata); 
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    if (!wallpaper) {
      haderWallpaper();
    }
  }, [wallpaper])

  console.log(wallpaper);
  

  return wallpaper ? (
    <>
      <Sidenav />
      <div className='w-[80%]'>
        <Topnav />
        <Header data={wallpaper} />
      </div>
    </>
  ) : <h1>Loading...</h1>
}

export default Home;
