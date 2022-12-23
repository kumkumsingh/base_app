import React, { useEffect, useRef } from 'react';
import { getAllSpecies, getAllAvailableSpecies } from "../redux/features/speciesSlice"
import { useAppDispatch, useAppSelector } from '../hooks/hooks';


const SpeciesList = () => {
  const speciesList = useAppSelector(getAllAvailableSpecies);
  const dispatch = useAppDispatch();

console.log('speciesList', speciesList);

  const fetchSpecies = async () => {
   await dispatch(getAllSpecies());
  }

  useEffect(() => {
    fetchSpecies();

  }, [dispatch])

  return (
<div>specieslist</div>)

}

export default SpeciesList;