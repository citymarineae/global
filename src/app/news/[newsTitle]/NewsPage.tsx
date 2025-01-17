"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import newsData from "data/contents/newsContent";
import Link from "next/link";
import apiService from "services/api";
import { News } from "types/News";
import parse from 'html-react-parser';
import { LatestNews as latestNewsType } from "types/LatestNews";

const NewsPage: React.FC = () => {
  const { newsTitle } = useParams();
  const [news, setNews] = useState<News>();
  const [loading, setLoading] = useState(true);
  // const news = newsTitle[0].replace(/-/g, "").replace(/%E2%80%99/g, "");
  // console.log(news);
  // const newsItem = newsData.find((item) => {
  //   return (
  //     item.title
  //       .replace(/ /g, "")
  //       .replace(/,/g, "")
  //       .replace(/\./g, "")
  //       .replace(/’/g, "")
  //       .replace(/-/g, "")
  //       .toLowerCase() == news
  //   );
  // });



  console.log("change")

  const [latestNewsLoading, setLatestNewsLoading] = useState(true)
  const [latestNews, setLatestNews] = useState<latestNewsType | null>(null)

  async function fetchLatestNews() {
    console.log("Called fetch")
    setLatestNewsLoading(true);
    try {
      const data: latestNewsType = await apiService.get(`/news?limit=3`);
      setLatestNews(data);
      console.log(data)
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLatestNewsLoading(false);
    }
  }


  useEffect(() => {
    console.log("useeffect")
    fetchLatestNews();
  }, []);

 

  const recentNews = newsData.slice(newsData.length - 3);
  const CACHE_KEY: string = "indiNews" + newsTitle;
  const CACHE_DURATION = 10 * 60 * 1000;

  // fetch news with given id (replace with actual news id for individual news)
  async function fetchDataWithId(newsTitle: string) {
    setLoading(true);
    try {
      const data: News = await apiService.get("/news?slug=" + newsTitle);
      setNews(data);
      CACHE_KEY
      localStorage.setItem(
        CACHE_KEY,
        JSON.stringify({
          timestamp: Date.now(),
          data: data,
        })
      );
      console.log("one news:", data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  }

  console.log(newsTitle);

  useEffect(() => {
    if (!newsTitle) return;
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { timestamp, data } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_DURATION) {
        // Use cached data if it's still valid
        setNews(data);
        console.log("using cache")
        setLoading(false);
        return;
      } else {
        localStorage.removeItem(CACHE_KEY)
      }
    }

    console.log("no cache")
    fetchDataWithId(newsTitle as string);
  }, [newsTitle]);

  // Todo: redo the below part with appropriate components and styles
  // if (loading) {
  //   return <div>Loading...</div>;
  // }


  if (loading || latestNewsLoading) {
    return <div>Loading content....</div>
  }
  
  if (!news) {
    return <div>No news found!!</div>;
  }

  // Todo: Please format news content properly

  return (
    <main className="content-wrapper">
      <section className="pg-bnr" style={{ backgroundImage: "url(/img/nws-dt-bnr.webp)" }}>
        <div className="container">
          <div className="pg-bnr__div">
            <h1 className="pg-bnr__ttl">News</h1>
          </div>
        </div>
      </section>

      <section className="wrapper py-10 py-lg-14 position-relative overflow-hidden">
        <div className="shape position-absolute end-5 d-none d-md-block opacity-25" style={{ bottom: "16%" }}>
          <img
            src="/img/icons/shape-up.svg"
            width="200"
            height="200"
            alt=""
            style={{ scale: 2.5, transform: "rotate(267deg)" }}
          />
        </div>
        <div className="container">
          <div className="row gx-10 gy-13">
            <div className="col-lg-8">
              <div className="news-dtbox">
                <div className="date-tag rounded-pill mb-6">
                  <p>{new Date(news.date).toDateString()}</p>
                </div>
                <h2 className="sbttl text-primary">{news?.title}</h2>
                <div className="news-dtbox__img py-6">
                  <img src={news?.image} width="200" height="200" className="w-100 h-auto" alt={news?.altTag} />
                </div>
                <p>{parse(news?.content)}</p>

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
              
                {latestNews?.news.map((item) => (
                <div className="smbox mb-5" key={item.id}>
                  <div className="smbox__head">
                    <img src={item.image} width="100" height="100" alt={item.altTag} />
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
