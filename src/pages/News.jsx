import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get('https://0229effb90d620ef.mokky.dev/news')
      .then(response => setNews(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2 className='news-title'>News</h2>
      <div className="news-container">
        {news.map(item => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
