import React, { useState, useEffect } from "react";
import NewsList from "./components/NewsList";
import NewsForm from "./components/NewsForm";
import "./App.css";

const App = () => {
  const [news, setNews] = useState([]);
  const [editingNews, setEditingNews] = useState(null);

  // Загрузка данных из localStorage при первой загрузке компонента
  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem("news"));
    if (storedNews) {
      setNews(storedNews);
    }
  }, []);

  // Сохранение данных в localStorage при каждом изменении списка новостей
  useEffect(() => {
    if (news.length > 0) {
      localStorage.setItem("news", JSON.stringify(news));
      console.log("Новости сохранены в localStorage:", news);
    }
  }, [news]);

  const addNews = (newItem) => {
    setNews([...news, newItem]);
  };

  const deleteNews = (id) => {
    const updatedNews = news.filter((item) => item.id !== id);
    setNews(updatedNews);
  };

  const editNews = (updatedItem) => {
    const updatedNews = news.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
    setNews(updatedNews);
    setEditingNews(null);
  };

  return (
    <div className="container">
      <h1>News CRUD App</h1>
      <NewsForm
        addNews={addNews}
        editNews={editNews}
        editingNews={editingNews}
        setEditingNews={setEditingNews}
      />
      <NewsList
        news={news}
        deleteNews={deleteNews}
        setEditingNews={setEditingNews}
      />
    </div>
  );
};

export default App;
