import React from 'react';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Trending from './components/Trending';
import Popular from './components/Popular';
import Movies from './components/Movies';
import Tv from './components/Tv';
import People from './components/People';
import Moviedetails from './components/Moviedetails';
import Tvdetails from './components/Tvdetails';
import Peopledetails from './components/Peopledetails';
import Trailer from './partials/Trailer';

const App = () => {
  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movie' element={<Movies />} />
        <Route path='/movie/details/:id' element={<Moviedetails />}>
        <Route 
             path='/movie/details/:id/trailer' element={<Trailer/>}/>
        </Route>
      
        <Route path='/tv' element={<Tv />} />
        <Route path='/tv/details/:id' element={<Tvdetails />} />
        <Route path='/people' element={<People />} />
        <Route path='/people/details/:id' element={<Peopledetails />} />
      </Routes>
    </div>
  );
};

export default App;
