import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews({ savedArticles, isLoggedIn, onDeleteArticle }) {
  const articleCount = savedArticles.length;

  const keywords = savedArticles.map((a) => a.keyword).filter(Boolean);
  const uniqueKeywords = [...new Set(keywords)];

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
          Ziah, you have {savedArticles.length} saved <br /> articles
        </p>

        {uniqueKeywords.length > 0 && (
          <p className="saved-news__keywords">
            By keywords: {uniqueKeywords.join(", ")}
          </p>
        )}
      </section>

      <NewsCardList
        articles={savedArticles}
        isLoggedIn={true}
        onDelete={onDeleteArticle}
        isSavedNewsPage={true}
      />
    </main>
  );
}

export default SavedNews;
