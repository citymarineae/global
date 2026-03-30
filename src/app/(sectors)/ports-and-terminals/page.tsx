import React from 'react'


import apiService from 'services/api';
import { Metadata } from 'next';
import { PortsAndTerminals as portAndTerminalsType } from "types/PortsAndTerminals";
import PortsAndTerminals from './PortsAndTerminals';

export async function generateMetadata(): Promise<Metadata> {

  const data: portAndTerminalsType = await apiService.get("/sectors/portsAndTerminals");

  const metadataTitle = data.metaDataTitle || "CITY MARINE - Marine, Energy & Crewing";
  const metadataDescription = data.metaDataDesc || "CITY MARINE - Marine, Energy & Crewing";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

const page = async () => {
  const response = await fetch(`${process.env.BASE_URL}/sectors/portsAndTerminals`, { next: { revalidate: 60 } });
  const data = await response.json();
  return (
    <PortsAndTerminals data={data} />
  )
}

export default page