import Image from 'next/image';
import React from 'react'

interface SectorItem {
    title: string;
    img: string;
  }
  
  const marineEnergyItems: SectorItem[] = [
    { title: "Hull & Machinery", img: "001.webp" },
    { title: "Protection & Indemnity", img: "002.webp" },
    { title: "War & Terrorism", img: "003.webp" },
    { title: "Kidnap & Ransom", img: "004.webp" },
    { title: "Cargo", img: "005.webp" },
    { title: "Freight-Demurrage-Defence", img: "006.webp" },
    { title: "Crewing", img: "007.webp" },
    { title: "Loss of Hire", img: "008.webp" },
    { title: "Specialist Cover", img: "009.webp" },
    { title: "Offshore and Energy", img: "010.webp" },
    { title: "Products for Offshore Energy Sector", img: "011.webp" },
    { title: "Insurance for Specific Units", img: "012.webp" },
  ];

  
const SectorItem = () => {
  return (
    <div className="row gy-5 gy-lg-8">
    {marineEnergyItems.map((item, index) => (
        <div className="col-md-6 col-lg-4 col-xxl-3" key={index}>
          <div className="hverbx">
            <a href="/marine-energy-details">
              <figure>
                <Image
                  src={`/img/pp/${item.img}`}
                  alt={item.title}
                  width={400}
                  height={300}
                />
              </figure>
              <div className="hbnmbxs">
                <div className="row d-flex align-items-end">
                  <div className="ttsc col-10">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="icms col-2 text-end">
                    <Image
                      src="/img/icons/rndarw.svg"
                      alt="Arrow"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      
      ))}
        <div className="col-12 text-center">
        <a className="btn rounded-pill btnCty" href="/marine-energy">
          Read More <i className="icbc"></i>
        </a>
        </div>
      </div>
  )
}

export default SectorItem