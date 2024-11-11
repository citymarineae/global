import React from 'react'


import apiService from 'services/api';
import { Metadata } from 'next';
import IndiMemeberPage from './MemberPage';


type Team = {
    id: string
    name: string
    image: string
    position: string
    description: string
    phone: string
    email: string,
    metaDataTitle:string,
    metaDataDesc:string
}

export async function generateMetadata({params}:{params:{memberName:string}}): Promise<Metadata>{
    
    const memberName = params.memberName

    const data: Team = await apiService.get("/team?slug=" + memberName);
  
  const metadataTitle = data.metaDataTitle || "CITY MARINE - Marine, Energy & Crewing";
  const metadataDescription = data.metaDataDesc || "CITY MARINE - Marine, Energy & Crewing";
    
  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

const page = () => {
  return (
    <IndiMemeberPage/>
  )
}

export default page