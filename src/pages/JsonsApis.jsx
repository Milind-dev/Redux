import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchJsonApis } from '../actions/jsonapi.actions';

export default function JsonsApis() {
  
    const dispatch = useDispatch();
  const { jsondata ,loading,error} = useSelector(state => state);
  
  useEffect(() => {
    dispatch(fetchJsonApis());
  },[dispatch]);
  console.log(jsondata)
    return (
    <div>JsonsApis</div>
  )
}
