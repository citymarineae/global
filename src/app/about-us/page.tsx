import React from 'react'

import apiService from 'services/api';
import { Metadata } from 'next';
import { About as aboutUsType } from 'types/About';
import About from './AboutUs';

export async function generateMetadata(): Promise<Metadata> {

  const data: aboutUsType = await apiService.get("/about");

  const metadataTitle = data.about[0].metaDataTitle || "CITY MARINE - Marine, Energy & Crewing";
  const metadataDescription = data.about[0].metaDataDesc || "CITY MARINE - Marine, Energy & Crewing";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

const page = async () => {
  const response = await fetch(`${process.env.BASE_URL}/about`, { next: { revalidate: 60 } });
  const data = await response.json();
  return (
    <About data={data.about[0]} />
  )
}

export default page
