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
  metaDataTitle: string,
  metaDataDesc: string
}

export async function generateMetadata({ params }: { params: { memberName: string } }): Promise<Metadata> {

  const memberName = params.memberName

  const data: Team = await apiService.get("/team?slug=" + memberName);

  const metadataTitle = data.metaDataTitle || "CITY MARINE - Marine, Energy & Crewing";
  const metadataDescription = data.metaDataDesc || "CITY MARINE - Marine, Energy & Crewing";

  return {
    title: metadataTitle,
    description: metadataDescription,
  };
}

const page = async ({ params }: { params: Promise<{ memberName: string }> }) => {
  const memberName = (await params).memberName;
  const response = await fetch(`${process.env.BASE_URL}/team?slug=${memberName[0]}`, {
    next: { revalidate: 60 },
  });
  const data = await response.json();
  return (
    <IndiMemeberPage data={data} />
  )
}

export default page