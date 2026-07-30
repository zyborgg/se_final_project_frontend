function NewsCard({ article, isLoggedIn, isSavedPage, onSave, onDelete }) {
  function handleSave() {
    if (!isLoggedIn) return;
    onSave(article);
  }

  function handleDelete() {
    onDelete(article);
  }

  return (
    <article className="news-card">
      <div className="news-card__image-container">
        <img
          src={article.image || "https://placehold.com/600x400"}
          alt={article.title}
          className="news-card__image"
        />
      </div>

      <div className="news-card__content">
        <p className="news-card__date">{article.date || "Unknown data"}</p>
        <h3 className="news-card__title">{article.title}</h3>
        <p className="news-card__description">{article.description}</p>
        <p className="nes-card__source">{article.source || "Unknown source"}</p>
      </div>

      <div className="nes-card__actions">
        {!isSavedPage && (
          <button
            className="news-card__save"
            onClick={handleSave}
            disabled={!isLoggedIn}
          >
            {isLoggedIn ? "🔖 Save" : "🔒 Login to Save"}
          </button>
        )}

        {isSavedPage && (
          <button className="news-card__delete" onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
    </article>
  );
}

export default NewsCard;
