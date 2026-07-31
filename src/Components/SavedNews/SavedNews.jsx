import NewsCard from "../NewsCard/NewsCard";
import "./SavedNews.css";

function SavedNews({ savedArticles, isLoggedIn, onDelete, onDeleteArticle }) {
  return (
    <main className="saved-news">
      <section className="saved-news__section">
        <h2 className="saved-news__title">Saved Articles</h2>
        <p className="saved-news__count">
          You have {savedArticles.length} saved articles
        </p>
      </section>

      <section className="saved-news__results">
        {savedArticles.length === 0 && (
          <p className="saved-news__empty">
            You haven't saved any articles yet.
          </p>
        )}

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
