import React from 'react'


import apiService from 'services/api';
import { Metadata } from 'next';
import { PersonalLines as personalLinesType } from 'types/PersonalLines';
import PersonalLines from './PersonalLines';

export async function generateMetadata(): Promise<Metadata>{
    
  const data:personalLinesType = await apiService.get("/sectors/personal-lines");
  
  const metadataTitle = data.metaDataTitle || "CITY MARINE - Marine, Energy & Crewing";
  const metadataDescription = data.metaDataDesc || "CITY MARINE - Marine, Energy & Crewing";
    
  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

const page = () => {
  return (
    <PersonalLines/>
  )
}

export default page
