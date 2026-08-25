import { useState } from "react";
import "./NewsCard.css";

function NewsCard({ article, isLoggedIn, isSavedNewsPage, onSave, onDelete }) {
  const [isVisuallySaved, setIsVisuallySaved] = useState(false);

  function handleSave(e) {
    e.stopPropagation();
    if (!isLoggedIn) return;
    onSave(article);
    setIsVisuallySaved(true);
  }

  function handleDelete(e) {
    e.stopPropagation();
    onDelete(article);
  }

  return (
    <div className="news-card">
      <div className="news-card__image-container">
        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="news-card__link"
        >
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
        </a>

        {!isSavedNewsPage && (
          <div
            className="news-card__save-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={`news-card__save-button ${
                isVisuallySaved ? "news-card__save-button--active" : ""
              }`}
              onClick={handleSave}
              disabled={!isLoggedIn}
            ></button>

            {!isLoggedIn && (
              <div className="news-card__tooltip">Sign in to save article</div>
            )}
          </div>
        )}

        {isSavedNewsPage && (
          <div
            className="news-card__delete-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="news-card__delete-button"
              onClick={handleDelete}
            ></button>

            <div className="news-card__delete-tooltip">Remove from saved</div>
          </div>
        )}
      </div>

      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        className="news-card__link"
      >
        <div className="news-card__content">
          <p className="news-card__date">{article.publishedAt}</p>
          <h3 className="news-card__title">{article.title}</h3>
          <p className="news-card__description">{article.description}</p>
          <p className="news-card__source">{article.source}</p>
        </div>
      </a>
    </div>
  );
}

export default NewsCard;
