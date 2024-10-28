// components/TopNews.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { formatNewsForUrl } from "app/helpers/formatLink";
import apiService from "services/api";
import { News } from "types/News";

const CACHE_KEY = "newsData";
const CACHE_DURATION = 10 * 60 * 1000; // 5 minutes in milliseconds

const NewsSection: React.FC = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  // Example usage: fetch all news and fetch one news with id
  // fetching all news
  async function fetchData() {
    setLoading(true);
    try {
      const data: { news: News[] } = await apiService.get("/news");
      setNews(data.news);
      // Cache the fetched data
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          timestamp: Date.now(),
          data: data.news,
        })
      );
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { timestamp, data } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_DURATION) {
        // Use cached data if it's still valid
        setNews(data);
        setLoading(false);
        return;
      }
    }
    fetchData();
  }, []);

  // Todo: redo the below part with appropriate components and styles
  if (loading) {
    return <div>Loading...</div>;
  }

  if (news.length === 0) {
    return <div>No news found.</div>;
  }

  return (
    <section className="topnews py-10 py-lg-14 position-relative">
      <div className="shape position-absolute top-5 end-min-2 d-none d-md-block z-index-min-1">
        <img src="/img/icons/shape-down.svg" width="200" height="200" style={{ transform: "rotate(177deg)" }} alt="" />
      </div>
      <div className="container">
        <div className="row d-flex align-items-stretch gy-lg-12 gy-8">
          <div className="col-lg-6">
            <div className="bigbox h-100">
              <div className="bigbox__imgbox">
                <img src={news[0].image} width="100" height="100" className="w-100 h-100" alt="" />
              </div>
              <div className="bigbox__content">
                <div className="date-tag rounded-pill">
                  <p>{new Date(news[0].date).toDateString()}</p>
                </div>
                <h3 className="news-title">{news[0].title}</h3>
                <p className="news-short-desc">{news[0].brief}</p>
                <Link href={`/news/${news[0].id}`} className="news-link text-primary">
                  <span>Read More</span>
                  <i className="nws-arrow"></i>
                </Link>
              </div>
            </div>
          </div>
          {news.slice(1).map((item: News, index: number) => {
            // Use col-lg-3 for the first two items, then col-lg-4 for the rest
            const colClass = index < 2 ? "col-lg-3" : "col-lg-4";
            return (
              <div className={colClass} key={item.id}>
                <div className="news-card">
                  <div className="news-card__head">
                    <img src={item.image} width="200" height="200" alt="" />
                  </div>
                  <div className="news-card__body">
                    <div className="date-tag rounded-pill">
                      <p>{new Date(news[0].date).toDateString()}</p>
                    </div>
                    <h3 className="news-title">{item.title}</h3>
                    <p className="news-short-desc">{item.brief}</p>
                  </div>
                  <div className="news-card__footer">
                    <Link href={`/news/${news[0].id}`} className="news-link text-primary">
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
