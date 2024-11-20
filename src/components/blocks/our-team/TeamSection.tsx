"use client"

import React, { useEffect, useState } from 'react';
import teamMembers from 'data/contents/TeamMember';
import Link from 'next/link';
import { formatNameForURL } from 'app/helpers/formatLink';
import apiService from 'services/api';

// Define the structure of a team member
interface TeamMember {
  id:string,
  name: string;
  position: string;
  image: string;
  altTag:string;
}



// Define the props for the TeamSection component
const TeamSection: React.FC = () => {

  const [loading,setLoading] = useState(true)
  const [memberDatas,setMemberDatas] = useState([])

async function fetchMembers() {
  setLoading(true);
  try {
    const data:any = await apiService.get("/team");
    setMemberDatas(data);
    console.log("one news:", data);
  } catch (error) {
    console.error("Failed to fetch data:", error);
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  fetchMembers()
}, []);

if(loading){
  <div>Loading data....</div>
}


  return (
    <section className="wrapper team-wrapper py-10 py-lg-14 position-relative overflow-hidden" data-cues="fadeIn"   data-delay="600" >
      <div className="container" >
        <div className="row row-cols-2 row-cols-md-3 row-cols-xxl-4 gy-4 gx-xl-10 team-wrapper__div" >
          {memberDatas.map((member: TeamMember, index: number) => (
            <Link href={`/our-team/${formatNameForURL(member.name)}`} key={index}><div className="col" >
              <div className="team-card">
                {/* <a href={member.detailsLink} className="team-card__link"></a> */}
                <div className="team-card__head">
                  <img
                    src={member.image}
                    className="team-card__img"
                    width="150"
                    height="150"
                    alt={member.altTag}
                  />
                </div>
                <div className="team-card__body">
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="team-wrapper__shape opacity-50 z-index-min-1" data-cue="fadeIn" data-delay="600">
        <img
          src="img/icons/shape-up.svg"
          width="150"
          height="150"
          alt="Shape"
          style={{ scale: '0.9' }}
        />
      </div>
    </section>
  );
};

export default TeamSection;
