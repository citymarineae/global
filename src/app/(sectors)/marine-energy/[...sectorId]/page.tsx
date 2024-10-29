"use client"

import React, { useEffect, useState } from 'react'
import { BannerVideo } from "components/blocks/includes/BannerVideo";
import apiService from 'services/api';
import { useParams } from 'next/navigation';
import { MarineSection } from 'types/MarineSections';
import parse from 'html-react-parser'
import Link from 'next/link';

export default function Sector(){

    const {sectorId} = useParams()
    const [loading, setLoading] = useState(true)
    const [sectionData, setSectionData] = useState< MarineSection | null >(null)

    async function fetchSectionData() {
        console.log("Called fetch")
        setLoading(true);
        try {
            const data:MarineSection = await apiService.get(`/sectors/marine/section?id=${sectorId}`);
            setSectionData(data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        console.log("useeffect")
        fetchSectionData();
    }, []);

    if(loading){
        return <div>Loading content....</div>
    }


    return (
        <main className="content-wrapper">
            <BannerVideo
                title="Marine, Energy & Crewing"
                videoSrc="/media/marineenergycrewing.mp4"
                posterSrc="/media/marine-energy01.webp"
            ></BannerVideo>

            <section className="wrapper py-10 py-lg-14 position-relative overflow-hidden">
                <div className="shape position-absolute top-5 end-0 d-none d-md-block opacity-50">
                    <img src="/img/icons/shape-up.svg" width="200" height="200" alt="" />
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-2 gy-10 gx-lg-14">
                        <div className="col d-flex">
                            <div className="img-box img-box-grd flex-grow-1">
                                <img src={sectionData?.image} className="w-100 h-100 object-fit-cover"
                                    alt="marine energy" />
                            </div>
                        </div>
                        <div className="col d-flex flex-column h-100">
                            <div className="wrapper-content d-flex flex-column h-100">
                                <h2 className="sbttl text-primary mb-lg-6">{sectionData?.title}
                                </h2>
                                {parse(sectionData?.content || "")}
                            </div>
                        </div>
                        <div className="col ms-auto">
                            <div className="go-back">
                                <Link href="/marine-energy"
                                    className="text-decoration-none text-primary d-flex align-items-center gap-2 fw-500">
                                    <img src="/img/icons/arrow-left.svg" width="50" height="50" alt="" /><span>Back</span></Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </main>
    )
}

