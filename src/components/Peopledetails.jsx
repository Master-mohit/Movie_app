import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadpeople, removepeople } from '../store/actions/peopleAction';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loaders from "./Loaders";
import HorizotalCards from "../partials/HorizotalCards";
import Dropdown from '../partials/Dropdown';

const Peopledetails = () => {
  const { pathname } = useLocation();
  const navigation = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.people);
  const [category, setcategory] = useState("movie");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncloadpeople(id));
    return () => {
      dispatch(removepeople());
    };
  }, [id]);

  const credits = info?.combinedcredits; // Safely access combinedcredits

  return info ? (
    <div className='px-[10%] w-screen h-[200vh] bg-[#1f1e24]'>
      {/* Navbar */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigation(-1)}
          className="ri-arrow-left-line hover:text-[#6556CD] text-white"
        ></Link>
      </nav>

      <div className='w-full flex'>
        {/* Left Section: Poster & Personal Details */}
        <div className='w-[20%]'>
          <img
            className="shadow-[8px_17px_39px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className='mt-10 mb-4 border-none h-[1px] bg-zinc-500' />

          {/* Social Links */}
          <div className='text-2xl text-white flex gap-x-5'>
            {info.externalid && (
              <>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                >
                  <i className="ri-earth-fill"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.facebook.com/${info.externalid.facebook_id}`}
                >
                  <i className="ri-facebook-circle-fill"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.instagram.com/${info.externalid.instagram_id}`}
                >
                  <i className="ri-instagram-fill"></i>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={`https://x.com/${info.externalid.twitter_id}`}
                >
                  <i className="ri-twitter-fill"></i>
                </a>
              </>
            )}
          </div>

          {/* Personal Information */}
          <h1 className='text-2xl text-zinc-400 font-semibold my-5'>Person</h1>
          <h1 className='text-lg text-zinc-400 font-semibold'>Known For</h1>
          <h1 className='text-zinc-400 font-semibold'>{info.detail.known_for_department}</h1>

          <h1 className='text-lg text-zinc-400 font-semibold mt-3'>Gender</h1>
          <h1 className='text-zinc-400 font-semibold'>
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>

          <h1 className='text-lg text-zinc-400 font-semibold mt-3'>Birthday</h1>
          <h1 className='text-zinc-400 font-semibold'>{info.detail.birthday}</h1>

          <h1 className='text-lg text-zinc-400 font-semibold mt-3'>Deathday</h1>
          <h1 className='text-zinc-400 font-semibold'>
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>

          <h1 className='text-lg text-zinc-400 font-semibold mt-3'>Place of Birth</h1>
          <h1 className='text-zinc-400 font-semibold'>{info.detail.place_of_birth}</h1>

          <h1 className='text-lg text-zinc-400 font-semibold mt-3'>Also Known As</h1>
          <h1 className='text-zinc-400 font-semibold'>{info.detail.also_known_as.join(", ")}</h1>
        </div>

        {/* Right Section: Details & Acting Credits */}
        <div className='w-[80%] ml-[5%]'>
          <h1 className='text-6xl text-zinc-400 font-black my-5'>{info.detail.name}</h1>

          <h1 className='text-xl text-zinc-400 font-semibold'>Biography</h1>
          <p className='text-zinc-400 mt-3'>{info.detail.biography}</p>

          <h1 className='text-2xl mt-6 mb-6 text-zinc-400 font-semibold'>Summary</h1>
          <HorizotalCards data={info. combinedcredits.cast}/>

          <div className='w-full flex justify-between'>
            <h1 className='text-2xl mt-7 text-zinc-400 font-semibold'>Acting</h1>
            <Dropdown
               title="Category"
               option={["tv", "movie"]}
                fun={(e) => setcategory(e.target.value)}
/>

          </div>

          <div className='list-disc text-zinc-400 w-full h-[50vh] overflow-x-hidden overflow-y-auto border-2 border-zinc-700 shadow-xl shadow-[rgba(255,255,255,.3)] mt-5'>
            {credits?.cast?.length > 0 ? (
              credits.cast.map((c, i) => (
                <li key={i} className='hover:text-white hover:bg-[#19191d] duration-300 cursor-pointer p-5 rounded'>
                  <Link to={`/${category}/details/${c.id}`}>
                    <span>
                      {c.name ||
                        c.title ||
                        c.original_title ||
                        c.original_name}
                    </span>
                    <span className='block ml-5'>{c.character && `Character name: ${c.character}`}</span>
                  </Link>
                </li>
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loaders />
  );
};

export default Peopledetails;
