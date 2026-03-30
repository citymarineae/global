import React from 'react'


import apiService from 'services/api';
import { Metadata } from 'next';
import { Contact as contactType } from "types/Contact";
import Contact from './ContactUs';

export async function generateMetadata(): Promise<Metadata> {

  const data: contactType = await apiService.get("/contact-us");


  const metadataTitle = data.contact[0].metaDataTitle || "CITY MARINE - Marine, Energy & Crewing";
  const metadataDescription = data.contact[0].metaDataDesc || "CITY MARINE - Marine, Energy & Crewing";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

const page = async () => {
  const response = await fetch(`${process.env.BASE_URL}/contact-us`, { next: { revalidate: 60 } });
  const data = await response.json();
  return (
    <Contact data={data.contact[0]} />
  )
}

export default page
