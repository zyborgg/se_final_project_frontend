import "./NewsCard.css";
import bookmark from "../../assets/bookmark.svg";
import bookmarkSave from "../../assets/bookmarkSave.png";
import bookmarkHover from "../../assets/bookmarkHover.svg";

function NewsCard({ article, isLoggedIn, isSavedNewsPage, onSave, onDelete }) {
  function handleSave() {
    console.log("Save clicked!", article);
    if (!isLoggedIn) return;
    onSave(article);
  }

  function handleDelete() {
    onDelete(article);
  }

  return (
    <li className="news-card">
      <div className="news-card__image-container">
        {console.log("IMAGE URL:", article.urlToImage)}
        <img
          src={article.urlToImage || article.image}
          onError={(e) => (e.target.src = "https://placehold.co/600x400")}
          alt={article.title}
          className="news-card__image"
        />

        {isSavedNewsPage && (
          <div className="news-card__keyword">{article.keyword}</div>
        )}

        {/* Save button — search page only */}
        {!isSavedNewsPage && (
          <div className="news-card__save-wrapper">
            <button
              className="news-card__save-button"
              onClick={() => isLoggedIn && onSave(article)}
              disabled={!isLoggedIn}
            ></button>

            {!isLoggedIn && (
              <div className="news-card__tooltip">Login to save article</div>
            )}
          </div>
        )}

        {/* Delete button — saved page only */}
        {isSavedNewsPage && (
          <button
            className="news-card__delete-button"
            onClick={() => onDelete(article)}
          ></button>
        )}
      </div>

      <div className="news-card__content">
        <p className="news-card__date">{article.publishedAt}</p>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">{article.description}</p>
        <p className="news-card__source">{article.source}</p>
      </div>
    </li>
  );
}

export default NewsCard;
