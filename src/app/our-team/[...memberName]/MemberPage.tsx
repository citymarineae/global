"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { BannerVideo } from "components/blocks/includes/BannerVideo";
import apiService from 'services/api'

type Team = {
    id: string
    name: string
    image: string
    position: string
    description: string
    phone: string
    email: string
}

const IndiMemeberPage = () => {

    const params = useParams()
    const { memberName } = params
    // const member = memberName[0].replace(/-/g, '')
    // const user = teamMembers.find((item)=>item.name.replace(/ /g, '').replace(/,/g, '').replace(/\./g, '').toLowerCase()==member)

    const [loading, setLoading] = useState(true)
    const [memeberData, setMemberData] = useState<{
        id: string
        name: string
        image: string
        position: string
        description: string
        phone: string
        email: string
    } | null>(null)

    async function fetchDataWithId(memberName: string) {
        setLoading(true);
        try {

            const data: Team = await apiService.get("/team?slug=" + memberName);
            if (data) {
                setMemberData(data);
            }
            console.log(data)
            console.log("one news:", data);
        } catch (error) {
            console.error("Failed to fetch data:", error);
        } finally {
            setLoading(false);
        }
    }

    //   console.log(newsTitle);

    useEffect(() => {
        if (!memberName) return;
        fetchDataWithId(memberName as string);
    }, [memberName]);

    return (
        <main className="content-wrapper">

        <BannerVideo title="Our Team" videoSrc="/media/team.mp4"  posterSrc="/img/team.png" ></BannerVideo>
            <section className="wrapper py-10 py-lg-14 position-relative">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-2 gy-4 gy-lg-0 gx-lg-14" data-cues="fadeIn" data-group="images" data-delay="400">
                        <div className="col pe-md-8">
                            <img src={memeberData?.image} width="300" height="300" className="w-100 h-auto" alt="" />
                        </div>
                        <div className="col d-flex flex-column justify-content-between">
                            <article className="member-details">
                                <h2 className="sbttl text-primary">{memeberData?.name}</h2>
                                <p>{memeberData?.description}
                                </p>
                            </article>
                            <div className="pb-lg-10 pt-4 pt-xl-0">
                                <ul className="list-unstyled list-style1">
                                    <li>
                                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.59923 6.83071C3.51909 11.0115 6.93041 14.3251 11.1652 16.1227L11.8452 16.4257C12.5983 16.761 13.4455 16.8198 14.2376 16.5917C15.0297 16.3636 15.7159 15.8632 16.1752 15.1787L17.0642 13.8547C17.2033 13.6471 17.2597 13.3949 17.2221 13.1478C17.1845 12.9007 17.0558 12.6766 16.8612 12.5197L13.8492 10.0897C13.7443 10.0051 13.6234 9.94264 13.4938 9.90597C13.3641 9.86929 13.2284 9.8592 13.0947 9.87629C12.9611 9.89338 12.8323 9.93731 12.716 10.0054C12.5998 10.0736 12.4985 10.1645 12.4182 10.2727L11.4862 11.5297C9.09384 10.3482 7.15736 8.41132 5.97623 6.01871L7.23223 5.08671C7.34048 5.00647 7.43139 4.90519 7.49952 4.78893C7.56764 4.67268 7.61156 4.54386 7.62866 4.41021C7.64575 4.27655 7.63565 4.14082 7.59898 4.01117C7.5623 3.88151 7.4998 3.76061 7.41523 3.65571L4.98523 0.643711C4.82833 0.449164 4.60427 0.320425 4.35717 0.282852C4.11008 0.245279 3.85787 0.301597 3.65023 0.440711L2.31723 1.33471C1.62863 1.79649 1.12632 2.48772 0.899786 3.28528C0.673248 4.08283 0.737195 4.9349 1.08023 5.68971L1.59923 6.83071Z"
                                                fill="#F4F4F7" />
                                        </svg>

                                        <article>
                                            <span>Phone</span>
                                            <a href="tel:+97165758800" className="text-decoration-none text-primary">{memeberData?.phone}</a>
                                        </article>
                                    </li>
                                    <li>
                                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16 0.5H2C1.0375 0.5 0.25875 1.2875 0.25875 2.25L0.25 12.75C0.25 13.7125 1.0375 14.5 2 14.5H16C16.9625 14.5 17.75 13.7125 17.75 12.75V2.25C17.75 1.2875 16.9625 0.5 16 0.5ZM15.65 4.21875L9.46375 8.08625C9.18375 8.26125 8.81625 8.26125 8.53625 8.08625L2.35 4.21875C2.26226 4.1695 2.18543 4.10295 2.12415 4.02315C2.06288 3.94334 2.01843 3.85193 1.9935 3.75445C1.96858 3.65697 1.96369 3.55544 1.97914 3.45602C1.99458 3.35659 2.03004 3.26134 2.08337 3.17601C2.1367 3.09069 2.20678 3.01707 2.28939 2.95962C2.37199 2.90217 2.46539 2.86207 2.56393 2.84176C2.66248 2.82145 2.76412 2.82135 2.86271 2.84145C2.9613 2.86156 3.05478 2.90147 3.1375 2.95875L9 6.625L14.8625 2.95875C14.9452 2.90147 15.0387 2.86156 15.1373 2.84145C15.2359 2.82135 15.3375 2.82145 15.4361 2.84176C15.5346 2.86207 15.628 2.90217 15.7106 2.95962C15.7932 3.01707 15.8633 3.09069 15.9166 3.17601C15.97 3.26134 16.0054 3.35659 16.0209 3.45602C16.0363 3.55544 16.0314 3.65697 16.0065 3.75445C15.9816 3.85193 15.9371 3.94334 15.8758 4.02315C15.8146 4.10295 15.7377 4.1695 15.65 4.21875Z"
                                                fill="#F4F4F7" />
                                        </svg>

                                        <article>
                                            <span>Email</span>
                                            <a href="mailto:+stephen@citymarinebrokers.com"
                                                className="text-decoration-none text-primary">{memeberData?.email}</a>
                                        </article>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col mt-4">
                            <div className="go-back">
                                <Link href="/our-team"
                                    className="text-decoration-none text-primary d-flex align-items-center gap-2 fw-500">
                                    <img src="/img/icons/arrow-left.svg" width="50" height="100" className="" alt="" />
                                    <span>Back</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="shape position-absolute bottom-10 end-2 d-none d-md-block opacity-25">
                        <img src="/img/icons/shape-up.svg" width="200" height="200" alt="" />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default IndiMemeberPage