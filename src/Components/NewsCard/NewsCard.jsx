import { useState } from "react";
import "./NewsCard.css";
import bookmark from "../../assets/bookmark.svg";
import bookmarkSave from "../../assets/bookmarkSave.svg";
import bookmarkHover from "../../assets/bookmarkHover.svg";

function NewsCard({
  article,
  isLoggedIn,
  isSavedNewsPage,
  isSaved,
  onSave,
  onDelete,
}) {
  const [isVisuallySaved, setIsVisuallySaved] = useState(false);

  function handleSave() {
    if (!isLoggedIn) return;

    onSave(article);
    setIsVisuallySaved(true);
  }

  function handleDelete() {
    onDelete(article);
  }

  return (
    <div className="news-card">
      <div className="news-card__image-container">
        <img
          src={
            article.urlToImage ||
            article.image ||
            "https://placehold.co/600x400"
          }
          onError={(e) => (e.target.src = "https://placehold.co/600x400")}
          alt={article.title}
          className="news-card__image"
        />

        {isSavedNewsPage && (
          <div className="news-card__keyword">{article.keyword}</div>
        )}

        {!isSavedNewsPage && (
          <div className="news-card__save-wrapper">
            <button
              className={`news-card__save-button ${
                isVisuallySaved ? "news-card__save-button--active" : ""
              }`}
              onClick={() => {
                if (!isLoggedIn) return;
                onSave(article);
                setIsVisuallySaved(true);
              }}
              disabled={!isLoggedIn}
            ></button>

            {!isLoggedIn && (
              <div className="news-card__tooltip">Sign in to save article</div>
            )}
          </div>
        )}

        {isSavedNewsPage && (
          <div className="news-card__delete-wrapper">
            <button
              className="news-card__delete-button"
              onClick={() => onDelete(article)}
            ></button>

            <div className="news-card__delete-tooltip">Remove from saved</div>
          </div>
        )}
      </div>

      <div className="news-card__content">
        <p className="news-card__date">{article.publishedAt}</p>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">{article.description}</p>
        <p className="news-card__source">{article.source}</p>
      </div>
    </div>
  );
}

export default NewsCard;
