"use client"
import React from 'react'
import { useParams } from 'next/navigation';
import newsData from 'data/contents/newsContent';
import Link from 'next/link';

const NewsPage: React.FC = () => {
    const params = useParams()
    const {newsId} = params
    const news = newsId[0]
    const foundNews = newsData.find((item)=>item.id.toString()==news)

    const recentNews = newsData.slice(newsData.length-3)
    

    return (
        <main className="content-wrapper">
            <section 
                className="pg-bnr" 
                style={{ backgroundImage: 'url(/img/nws-dt-bnr.webp)' }}
            >
                <div className="container">
                    <div className="pg-bnr__div">
                        <h1 className="pg-bnr__ttl">News</h1>
                    </div>
                </div>
            </section>

            <section className="wrapper py-10 py-lg-14 position-relative overflow-hidden">
                <div 
                    className="shape position-absolute end-5 d-none d-md-block opacity-25" 
                    style={{ bottom: '16%' }}
                >
                    <img 
                        src="/img/icons/shape-up.svg" 
                        width="200" 
                        height="200" 
                        alt="" 
                        style={{ scale: 2.5, transform: 'rotate(267deg)' }} 
                    />
                </div>
                <div className="container">
                    <div className="row gx-10 gy-13">
                        <div className="col-lg-8">
                            <div className="news-dtbox">
                                <div className="date-tag rounded-pill mb-6">
                                    <p>{foundNews?.date}</p>
                                </div>
                                <h2 className="sbttl text-primary">{foundNews?.title}</h2>
                                <div className="news-dtbox__img py-6">
                                    <img 
                                        src={foundNews?.imgSrc}
                                        width="200" 
                                        height="200" 
                                        className="w-100 h-auto" 
                                        alt="" 
                                    />
                                </div>
                                <p>
                                    {foundNews?.description}
                                </p>
                                <p>
                                    {foundNews?.description}
                                </p>
                                <p>
                                    {foundNews?.description}
                                </p>
                                
                                <div className="go-back">
                                    <Link 
                                        href="/news" 
                                        className="text-decoration-none text-primary d-flex align-items-center gap-2 fw-500"
                                    >
                                        <img src="/img/icons/arrow-left.svg" alt="" />
                                        <span>Back to News</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <aside className="col-lg-4">
                            <h2 className="sbttl text-primary mb-3 mb-lg-6">Recent News</h2>
                            
                            {recentNews.map((item)=>(
                                <div className="smbox mb-5" key={item.id}>
                                <div className="smbox__head">
                                    <img src="/img/news-t1.webp" width="100" height="100" alt="" />
                                </div>
                                <div className="smbox__body">
                                    <h3 className="sbttl-sm">{item.title}</h3>
                                    <Link href={`/news/${item.id}`} className="news-link text-primary">
                                        <span>Read More</span>
                                        <i className="nws-arrow"></i>
                                    </Link>
                                </div>
                            </div>
                            ))}
                            
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default NewsPage;
