import axios from '../utills/axioss'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import noimage from '/no-image-available.png'
const Topnav = () => {
    const [query, setquery] = useState("")
    const [search, setsearch] = useState([])

    const getsearch = async () => {
        try {
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setsearch(data.results);
        } catch (error) {
            console.log("Error", error);
        }
    }

    useEffect(() => {
        getsearch();
    }, [query])

    return (
        <div className='w-[80%] h-[10vh] relative flex justify-start items-center pl-[12%]'>
            <i className="text-zinc-400 text-3xl ri-search-2-line"></i>
            <input onChange={(e) => setquery(e.target.value)}
                value={query}
                className='w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent'
                type='text'
                placeholder='search anything' />
            {query.length > 0 && (
                <i onClick={() => setquery("")} className="text-zinc-400 text-3xl ri-close-line"></i>
            )}

            <div className='w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[20%] absolute overflow-auto rounded'>
                {search && search.map((s, i) => {
                    return (
                        <Link to={`/${s.media_type}/details/${s.id}`} 
                            key={i} 
                        className='w-[100%] hover:text-black hover:bg-zinc-300 duration-300 flex items-center justify-start text-zinc-600 font-semibold p-10 border-2 border-zinc-100'>
                            <img className='w-[10vh] h-[10vh] object-cover mr-5 rounded shadow-lg'
                             src={
                              s.backdrop_path || s.profile_path ?`https://image.tmdb.org/t/p/original/${
                                s.backdrop_path || s.profile_path
                              }` : noimage} alt='' />
                            <span>{s.name || s.title || s.origninal_title || s.original_name}</span>
                        </Link>
                    );
                })}
            </div>
        </div>
    )
}

export default Topnav
