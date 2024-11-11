import React from 'react'
import Claims from './ClaimsPage'
import { Claims as claimsType } from "types/Claims";
import apiService from 'services/api';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata>{
    
  const data:claimsType = await apiService.get("/claims");

  
  const metadataTitle = data.claims[0]?.metaDataTitle || "Default Title";
  const metadataDescription = data.claims[0]?.metaDataDesc || "Default description";
    
  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

const page = () => {
  return (
    <Claims/>
  )
}

export default page