"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import apiService from 'services/api';
import { MarineInsuraceSectors } from 'types/MarineInsuraceSectors';


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

  const [loading,setLoading] = useState(true)
  const [marineInsuranceSectors,setMarineInsuranceSectors] = useState<MarineInsuraceSectors | null>(null)

  async function fetchMarineInsuranceSectorsData() {
    setLoading(true);
    try {
      const data:MarineInsuraceSectors = await apiService.get("/sectors/marine/section");
      setMarineInsuranceSectors(data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMarineInsuranceSectorsData();
  }, []);
  
  return (
    <div className="row gy-5 gy-lg-8">
    {marineInsuranceSectors?.marineSections && marineInsuranceSectors.marineSections.map((item, index) => (
        <div className="col-md-6 col-lg-4 col-xxl-3" key={index}>
          <div className="hverbx">
            <Link href={`/marine-energy/${item.id}`}>
              <figure>
                <img
                  src={item.image}
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
                    <img
                      src="/img/icons/rndarw.svg"
                      alt="Arrow"
                      width={20}
                      height={20}
                    />
                  </div>
                </div>
              </div>
            </Link>
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