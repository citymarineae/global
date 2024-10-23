// components/TopNews.tsx

import React from 'react';
import newsData, { NewsItem } from 'data/contents/newsContent';
import Link from 'next/link';
import { formatNewsForUrl } from 'app/helpers/formatLink';

const NewsSection: React.FC = () => {
    return (
        <section className="topnews py-10 py-lg-14 position-relative">
            <div className="shape position-absolute top-5 end-min-2 d-none d-md-block z-index-min-1">
                <img src="/img/icons/shape-down.svg" width="200" height="200" style={{ transform: 'rotate(177deg)' }} alt="" />
            </div>
            <div className="container">
                <div className="row d-flex align-items-stretch gy-lg-12 gy-8">
                    <div className="col-lg-6">
                        <div className="bigbox h-100">
                            <div className="bigbox__imgbox">
                                <img src={newsData[0].imgSrc} width="100" height="100" className="w-100 h-100" alt="" />
                            </div>
                            <div className="bigbox__content">
                                <div className="date-tag rounded-pill">
                                    <p>{newsData[0].date}</p>
                                </div>
                                <h3 className="news-title">{newsData[0].title}</h3>
                                <p className="news-short-desc">{newsData[0].description}</p>
                                <Link href={`/news/${formatNewsForUrl(newsData[0].title)}`} className="news-link text-primary">
                                    <span>Read More</span>
                                    <i className="nws-arrow"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {newsData.slice(1).map((item: NewsItem, index: number) => {
                        // Use col-lg-3 for the first two items, then col-lg-4 for the rest
                        const colClass = (index < 2) ? 'col-lg-3' : 'col-lg-4';
                        return (
                            <div className={colClass} key={item.id}>
                                <div className="news-card">
                                    <div className="news-card__head">
                                        <img src={item.imgSrc} width="200" height="200" alt="" />
                                    </div>
                                    <div className="news-card__body">
                                        <div className="date-tag rounded-pill">
                                            <p>{item.date}</p>
                                        </div>
                                        <h3 className="news-title">{item.title}</h3>
                                        <p className="news-short-desc">{item.description}</p>
                                    </div>
                                    <div className="news-card__footer">
                                        <Link href={`/news/${formatNewsForUrl(item.title)}`} className="news-link text-primary">
                                            <span>Read More</span>
                                            <i className="nws-arrow"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;