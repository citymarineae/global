// components/TopNews.tsx
"use client";
import React, { useEffect } from "react";
import newsData, { NewsItem } from "data/contents/newsContent";
import apiService from "services/api";

const NewsSection: React.FC = () => {
  // Example usage: fetch all news and fetch one news with id
  const firstNewsId = "6717c9cf8af2ced37065f279"; // this id is for example purpose(id of first news in current database)
  // fetching all news
  async function fetchData() {
    try {
      const data = await apiService.get("/news");
      console.log("news:", data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  // fetch news with given id (replace with actual news id for individual news)
  async function fetchDataWithId(id: string) {
    try {
      const data = await apiService.get("/news?id=" + id);
      console.log("one news:", data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  useEffect(() => {
    fetchData();
    fetchDataWithId(firstNewsId);
  }, []);

  return (
    <section className="topnews py-10 py-lg-14 position-relative">
      <div className="shape position-absolute top-5 end-min-2 d-none d-md-block z-index-min-1">
        <img
          src="./assets/img/icons/shape-down.svg"
          width="200"
          height="200"
          style={{ transform: "rotate(177deg)" }}
          alt=""
        />
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
                <a href={newsData[0].link} className="news-link text-primary">
                  <span>Read More</span>
                  <i className="nws-arrow"></i>
                </a>
              </div>
            </div>
          </div>
          {newsData.slice(1).map((item: NewsItem, index: number) => {
            // Use col-lg-3 for the first two items, then col-lg-4 for the rest
            const colClass = index < 2 ? "col-lg-3" : "col-lg-4";
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
                    <a href={item.link} className="news-link text-primary">
                      <span>Read More</span>
                      <i className="nws-arrow"></i>
                    </a>
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
