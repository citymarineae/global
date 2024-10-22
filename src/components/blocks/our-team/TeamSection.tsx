import React from 'react';
import teamMembers from 'data/contents/TeamMember';
import Link from 'next/link';

// Define the structure of a team member
interface TeamMember {
  id:number,
  name: string;
  position: string;
  imageSrc: string;
  detailsLink: string;
}

// Define the props for the TeamSection component
const TeamSection: React.FC = () => {
  return (
    <section className="wrapper team-wrapper py-10 py-lg-14 position-relative overflow-hidden">
      <div className="container">
        <div className="row row-cols-2 row-cols-md-3 row-cols-xxl-4 gy-4 gx-xl-10 team-wrapper__div">
          {teamMembers.map((member: TeamMember, index: number) => (
            <Link href={`/our-team/${(member.name)}`} key={index}><div className="col">
              <div className="team-card">
                <a href={member.detailsLink} className="team-card__link"></a>
                <div className="team-card__head">
                  <img
                    src={member.imageSrc}
                    className="team-card__img"
                    width="150"
                    height="150"
                    alt={member.name}
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
      <div className="team-wrapper__shape opacity-50 z-index-min-1">
        <img
          src="assets/img/icons/shape-up.svg"
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
