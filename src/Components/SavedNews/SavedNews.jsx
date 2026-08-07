import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews({ savedArticles, isLoggedIn, onDeleteArticle }) {
  const keywords = [
    ...new Set(savedArticles.map((a) => a.keyword).filter(Boolean)),
  ];

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

  return (
    <main className="saved-news">
      <section className="saved-news__section">
        <h2 className="saved-news__title">Saved Articles</h2>

        <p className="saved-news__count">
          Ziah, you have {savedArticles.length} saved <br /> articles
        </p>

        {keywords.length > 0 && (
          <p className="saved-news__keywords">
            <span className="saved-news__keywords-label">By keywords:</span>
            <span className="saved-news__keywords-list">
              {keywords.join(", ")}
            </span>
          </p>
        )}
      </section>

      <NewsCardList
        articles={savedArticles}
        isLoggedIn={isLoggedIn}
        isSavedNewsPage={true}
        onDelete={onDeleteArticle}
        onSave={null}
      />
    </main>
  );
}

export default SavedNews;
