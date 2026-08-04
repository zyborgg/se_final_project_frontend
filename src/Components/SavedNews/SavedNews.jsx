import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ savedArticles, isLoggedIn, onDeleteArticle }) {
  // CASE A — No saved articles
  if (savedArticles.length === 0) {
    return (
      <main className="saved-news">
        <section className="saved-news__section">
          <h2 className="saved-news__title">Saved Articles</h2>
          <p className="saved-news__empty">
            You haven't saved any articles yet.
          </p>
        </section>
      </main>
    );
  }

  // CASE B — Saved articles exist
  return (
    <main className="saved-news">
      <section className="saved-news__section">
        <h2 className="saved-news__title">Saved Articles</h2>
        <p className="saved-news__count">
          You have {savedArticles.length} saved articles
        </p>
      </section>

      <section className="saved-news__results">
        {savedArticles.map((article, index) => (
          <NewsCard
            key={index}
            article={article}
            isLoggedIn={isLoggedIn}
            isSavedPage={true}
            onDelete={onDeleteArticle}
          />
        ))}
      </section>
    </main>
  );
}

export default SavedNews;
