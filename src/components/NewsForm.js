import React, { useState, useEffect } from "react";

const NewsForm = ({ addNews, editNews, editingNews, setEditingNews }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingNews) {
      setTitle(editingNews.title);
      setContent(editingNews.content);
    } else {
      setTitle("");
      setContent("");
    }
  }, [editingNews]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: editingNews ? editingNews.id : Date.now(),
      title,
      content,
    };
    if (editingNews) {
      editNews(newItem);
    } else {
      addNews(newItem);
    }
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="news-form">
      <h2>{editingNews ? "Edit News" : "Add News"}</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">{editingNews ? "Update" : "Add"}</button>
      {editingNews && (
        <button className="cansel" onClick={() => setEditingNews(null)}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default NewsForm;
