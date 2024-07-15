'use client'

import { useEffect, useState } from 'react';

interface NewsItem {
  dateTime: string;
  imgSrc: string;
  redirectUrl: string;
  displayLink: string;
  title: string;
}

export default function News() {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    fetch('http://ec2-18-188-23-208.us-east-2.compute.amazonaws.com/news')
      .then(response => response.json())
      .then(data => setNews(data))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl mt-10 mb-10 text-center">Indicador de Orgulho e Ganância</h1>

        <cs-widget type="fear-and-greed"
          theme="escuro"
          direction="horizontal"
          background="rgba(31,41,55,1)"
          is-market-sentiment-visible="true"
          is-last-updated-visible="true"
          title-color="#FFFFFF"
          chart-indicator-one-color="#F02935"
          chart-indicator-two-color="#F07D29"
          chart-indicator-three-color="#9ACB82"
          chart-indicator-four-color="#34B349"
          subtitle-color="#999999"
          last-updated-color="#999999"
          arrow-color="#262626"></cs-widget>
        

        <h1 className="text-4xl mt-10 mb-10 text-center">Lista de Notícias</h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <a key={index} href={item.redirectUrl} target="_blank" rel="noopener noreferrer">
              <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105">
                <img src={item.imgSrc} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                  <p className="text-gray-400 mb-4">{item.displayLink}</p>
                  <p className="text-gray-500">{new Date(item.dateTime).toLocaleDateString()}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
