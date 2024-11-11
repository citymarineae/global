import React from 'react'


import apiService from 'services/api';
import { Metadata } from 'next';
import MarineEnergy from './MarineEnergy';
import { MarineInsurace } from 'types/MarineInsurance';

export async function generateMetadata(): Promise<Metadata>{
    
    const data:MarineInsurace = await apiService.get("/sectors/marine");
  
  const metadataTitle = data.metaDataTitle || "CITY MARINE - Marine, Energy & Crewing";
  const metadataDescription = data.metaDataDesc || "CITY MARINE - Marine, Energy & Crewing";
    
  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

const page = () => {
  return (
    <MarineEnergy/>
  )
}

export default page