import React from 'react'


import apiService from 'services/api';
import { Metadata } from 'next';
import { Contact as contactType } from "types/Contact";
import Contact from './ContactUs';

export async function generateMetadata(): Promise<Metadata>{
    
  const data: contactType = await apiService.get("/contact-us");

  
  const metadataTitle = data.contact[0].metaDataTitle || "CITY MARINE - Marine, Energy & Crewing";
  const metadataDescription = data.contact[0].metaDataDesc || "CITY MARINE - Marine, Energy & Crewing";
    
  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

const page = () => {
  return (
    <Contact/>
  )
}

export default page
