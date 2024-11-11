import React from 'react'


import apiService from 'services/api';
import { Metadata } from 'next';
import MarineSectors from './MarineSectors'
import { MarineSection } from 'types/MarineSections';


export async function generateMetadata({params}:{params:{sectorId:string}}): Promise<Metadata>{
    
    const sectionName = params.sectorId

    const data:MarineSection = await apiService.get(`/sectors/marine/section?slug=${sectionName}`);
  
  const metadataTitle = data.metaDataTitle || "CITY MARINE - Marine, Energy & Crewing";
  const metadataDescription = data.metaDataDesc || "CITY MARINE - Marine, Energy & Crewing";
    
  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

const page = () => {
  return (
    <MarineSectors/>
  )
}

export default page