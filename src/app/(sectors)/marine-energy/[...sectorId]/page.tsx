import React from 'react'


import apiService from 'services/api';
import { Metadata } from 'next';
import MarineSectors from './MarineSectors'
import { MarineSection } from 'types/MarineSections';


export async function generateMetadata({ params }: { params: { sectorId: string } }): Promise<Metadata> {

  const sectionName = params.sectorId

  const data: MarineSection = await apiService.get(`/sectors/marine/section?slug=${sectionName}`);

  const metadataTitle = data.metaDataTitle || "CITY MARINE - Marine, Energy & Crewing";
  const metadataDescription = data.metaDataDesc || "CITY MARINE - Marine, Energy & Crewing";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

const page = async ({ params }: { params: Promise<{ sectorId: string }> }) => {
  const sectorId = (await params).sectorId;
  const response = await fetch(`${process.env.BASE_URL}/sectors/marine/section?slug=${sectorId[0]}`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  return (
    <MarineSectors data={data} />
  )
}

export default page