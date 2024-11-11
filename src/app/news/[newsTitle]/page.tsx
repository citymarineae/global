import React from 'react'


import apiService from 'services/api';
import { Metadata } from 'next';
import { News } from "types/News";
import NewsPage from './NewsPage';

export async function generateMetadata({params}:{params:{newsTitle:string}}): Promise<Metadata>{
    const newsTitle = params.newsTitle
  const data: News = await apiService.get("/news?slug=" + newsTitle);
  
  const metadataTitle = data.metaDataTitle || "CITY MARINE - Marine, Energy & Crewing";
  const metadataDescription = data.metaDataDesc || "CITY MARINE - Marine, Energy & Crewing";
    
  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

const page = () => {
  return (
    <NewsPage/>
  )
}

export default page