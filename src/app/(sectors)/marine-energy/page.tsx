import React from 'react'
import apiService from 'services/api';
import { Metadata } from 'next';
import MarineEnergy from './MarineEnergy';
import { MarineInsurace } from 'types/MarineInsurance';

export async function generateMetadata(): Promise<Metadata> {

  const data: MarineInsurace = await apiService.get("/sectors/marine");

  const metadataTitle = data.metaDataTitle || "CITY MARINE - Marine, Energy & Crewing";
  const metadataDescription = data.metaDataDesc || "CITY MARINE - Marine, Energy & Crewing";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

const page = async () => {
  const response = await fetch(`${process.env.BASE_URL}/sectors/marine`, { next: { revalidate: 60 } });
  const data = await response.json();

  const sectorResponse = await fetch(`${process.env.BASE_URL}/sectors/marine/section`, { next: { revalidate: 60 } });
  const sectorData = await sectorResponse.json();
  return (
    <MarineEnergy data={data} sectorData={sectorData} />
  )
}

export default page