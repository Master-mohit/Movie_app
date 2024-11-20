import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { asyncloadmovie, removemovie } from '../store/actions/movieAction';
import { useParams } from 'react-router-dom';

const Moviedetails = () => {
  const {id} = useParams();
 const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id))
    return () => {
      dispatch(removemovie());
    }
  }, [])
  

  return (
    <div className='text-white'>
     mohi
    </div>
  )
}

export default Moviedetails
