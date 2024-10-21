// data/newsData.ts

export interface NewsItem {
    id: number;
    date: string;
    title: string;
    description: string;
    imgSrc: string;
    link: string;
}

const newsData: NewsItem[] = [
    {
        id: 1,
        date: '20 August 2024',
        title: "IG Supports Mercy Ships’ Life-Changing Mission",
        description: "IG provides crucial support to Mercy Ships, enabling life-saving surgeries and medical care for those in need.",
        imgSrc: "/img/news-big.webp",
        link: "news-details.php"
    },
    {
        id: 2,
        date: '20 August 2024',
        title: "IG Supports Mercy Ships’ Life-Changing Mission",
        description: "IG provides crucial support to Mercy Ships, enabling life-saving surgeries and medical care for those in need.",
        imgSrc: "/img/news-t1.webp",
        link: "news-details.php"
    },
    {
        id: 3,
        date: '20 August 2024',
        title: "IG Supports Mercy Ships’ Life-Changing Mission",
        description: "IG provides crucial support to Mercy Ships, enabling life-saving surgeries and medical care for those in need.",
        imgSrc: "/img/news-t1.webp",
        link: "news-details.php"
    },
    {
        id: 4,
        date: '20 August 2024',
        title: "IG Supports Mercy Ships’ Life-Changing Mission",
        description: "IG provides crucial support to Mercy Ships, enabling life-saving surgeries and medical care for those in need.",
        imgSrc: "/img/news-t1.webp",
        link: "news-details.php"
    },
    {
        id: 5,
        date: '20 August 2024',
        title: "IG Supports Mercy Ships’ Life-Changing Mission",
        description: "IG provides crucial support to Mercy Ships, enabling life-saving surgeries and medical care for those in need.",
        imgSrc: "/img/news-t1.webp",
        link: "news-details.php"
    },
    {
        id: 6,
        date: '20 August 2024',
        title: "IG Supports Mercy Ships’ Life-Changing Mission",
        description: "IG provides crucial support to Mercy Ships, enabling life-saving surgeries and medical care for those in need.",
        imgSrc: "/img/news-t1.webp",
        link: "news-details.php"
    },
    // Add more news items as needed...
];

export default newsData;
