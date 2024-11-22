import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncloadmovie, removemovie } from '../store/actions/movieAction';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loaders from "../components/Loaders";
import HorizotalCards from "../partials/HorizotalCards";

const Moviedetails = () => {
  const {pathname} = useLocation();
  const navigation = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [dispatch, id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7), rgba(0,0,0,0.4)), 
          url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "start",
        backgroundSize: "cover",
        overflow: "hidden",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-[140vh] px-[10%]"
    >
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center gap-10 text-xl">
        <Link
          onClick={() => navigation(-1)}
          className="ri-arrow-left-line hover:text-[#6556CD] text-white"
        ></Link>
        <a target="_blank" rel="noreferrer" href={info.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
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
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
        >
          IMDb
        </a>
      </nav>

      <div className="w-full flex">
        <img
          className="shadow-[8px_17px_39px_2px_rgba(0,0,0,.5)] h-[60vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className='content ml-[5%] text-white'>
          <h1 className='text-white text-5xl font-black'>
            {info.detail.name || 
            info.detail.title ||
            info.detail.origninal_title ||
            info.detail.original_name}

            <small className='text-xl font-bold text-zin-300'>
              ({info.detail.release_date.split("-")[0]})
           </small>
          </h1>
         
        <div className='mt-3 mb-6 flex text-white gap-x-5 items-center'>
     <span className='rounded-full text-xl font-semibold bg-yellow-600
        text-white w-[5vh] h-[5vh] flex items-center justify-center'>
        {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
       </span>
       <h1 className='w-[50px] text-2xl font-semibold'>User score</h1>
       <h1>{info.detail.release_date}</h1>
       <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
       <h1>{info.detail.runtime}min</h1>
        </div>

       <h1 className='text-xl font-semibold italic text-zinc-200'>
        {info.detail.tagline}
       </h1>

       <h1 className='text-xl mt-3 text-zinc-200'>
        {info.detail.overview}
       </h1>
       <h1 className='text-2xl mb-3 mt-5'>Movie Translated</h1>
       <p>{info.translations.join(" ")}</p>
      

       <div className='mt-6'>
       <Link className='text-white rounded-lg bg-[#6556CD] p-4'
        to={`${pathname}/trailer`}>
          <i class="text-xl mr-2 ri-play-mini-fill font-semibold"></i>
          Play trailer</Link>
       </div>

        </div>

      </div>

      <div className="w-[80%] mt-5 mb-6 ">

        {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available on Platforms</h1>
              {info.watchproviders.flatrate.map((w) => (
                <img title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md mb-4 "
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}
         
          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available on Rent</h1>
              {info.watchproviders.rent.map((w) => (
                <img title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md mb-4"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )}
         
         {info.watchproviders && info.watchproviders.buy && (
            <div className="flex gap-x-10 items-center text-white">
              <h1>Available on Buy</h1>
              {info.watchproviders.buy.map((w) => (
                <img title={w.provider_name}
                  className="w-[5vh] h-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                  alt=""
                />
              ))}
            </div>
          )} 
        
      </div>
       
       <hr className='mt-10 mb-4 border-none h-[1px] bg-zinc-500'/>
       <h1 className='text-3xl font-bold text-white mb-4'>
        Recommendations and Similar stuff
       </h1>

       { <HorizotalCards data={
        info.recommendations.length > 0 ? info.recommendations : info.similar
       } />}
      

    </div>
  ) : (
    <Loaders />
  );
};

export default Moviedetails;
