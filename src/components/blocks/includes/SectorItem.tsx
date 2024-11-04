"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import apiService from 'services/api';
import { MarineInsuraceSectors } from 'types/MarineInsuraceSectors';
import { usePathname, useRouter } from 'next/navigation';


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


  export const SectorItem = () => {

    const router = usePathname()

  const [loading,setLoading] = useState(true)
  const [marineInsuranceSectors,setMarineInsuranceSectors] = useState<MarineInsuraceSectors | null>(null)
  const [readMoreButton,setReadMoreButton] = useState(false)

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

  useEffect(()=>{
    if(router.startsWith('/marine-energy')){
      setReadMoreButton(false)
    }else{
      setReadMoreButton(true)
    }
  },[router])

  return (
    <div className="row gy-5 gy-lg-8">
    {marineInsuranceSectors?.marineSections && marineInsuranceSectors.marineSections.map((item, index) => (
        <div className="col-6 col-lg-4 col-xxl-3 item-ide" key={index}>
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
                  <div className="ttsc col-12 col-md-10">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="icms col-4  col-md-2 text-end d-none d-md-block">
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
        { readMoreButton && <div className="col-12 text-center">
        <Link className="btn rounded-pill btnCty" href="/marine-energy">
          Read More <i className="icbc"></i>
        </Link>
        </div>}
      </div>
  )
}

export default SectorItem