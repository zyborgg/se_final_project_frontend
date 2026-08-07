import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  articles,
  isLoggedIn,
  onSave,
  onDelete,
  isSavedNewsPage,
}) {
  return (
    <section className="news-card-list">
      {!isSavedNewsPage && (
        <h2 className="news-card-list__title">Search results</h2>
      )}

      <ul className="news-card-list__grid">
        {articles.map((article, index) => (
          <NewsCard
            key={`${article.title}-${index}`}
            article={article}
            isLoggedIn={isLoggedIn}
            onSave={onSave}
            onDelete={onDelete}
            isSavedNewsPage={isSavedNewsPage}
          />
        ))}
      </ul>
    </section>
  );
}

export default NewsCardList;
