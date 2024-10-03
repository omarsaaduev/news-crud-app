import React from "react";

const NewsList = ({ news, deleteNews, setEditingNews }) => {
  return (
    <div>
      <h2>News Feed</h2>
      <ul className="news-list">
        {news.length === 0 ? (
          <p>No news available</p>
        ) : (
          news.map((item) => (
            <li key={item.id} className="news-item">
              <div className="news-item-header">
                <h3>{item.title}</h3>
              </div>
              <div className="news-item-content">
                <p>{item.content}</p>
              </div>
              <div className="news-item-footer">
                <button onClick={() => setEditingNews(item)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteNews(item)}>
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default NewsList;
