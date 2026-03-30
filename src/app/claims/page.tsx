import React from 'react'
import Claims from './ClaimsPage'
import { Claims as claimsType } from "types/Claims";
import apiService from 'services/api';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {

  const data: claimsType = await apiService.get("/claims");


  const metadataTitle = data.claims[0]?.metaDataTitle || "Default Title";
  const metadataDescription = data.claims[0]?.metaDataDesc || "Default description";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

const page = async () => {
  const response = await fetch(`${process.env.BASE_URL}/claims`, { next: { revalidate: 60 } });
  const data = await response.json();
  return (
    <Claims data={data.claims[0]} />
  )
}

export default page