import { useState } from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({
  articles,
  isLoggedIn,
  onSave,
  onDelete,
  isSavedNewsPage,
}) {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section className="news-card-list">
      {!isSavedNewsPage && (
        <h2 className="news-card-list__title">Search results</h2>
      )}

      <ul className="news-card-list__grid">
        {(isSavedNewsPage ? articles : articles.slice(0, visibleCount)).map(
          (article, index) => (
            <NewsCard
              key={`${article.title}-${index}`}
              article={article}
              isLoggedIn={isLoggedIn}
              onSave={onSave}
              onDelete={onDelete}
              isSavedNewsPage={isSavedNewsPage}
            />
          ),
        )}
      </ul>
      {!isSavedNewsPage && articles.length > visibleCount && (
        <div className="search-results">
          <button
            className="search-results__show-more"
            onClick={() => setVisibleCount(visibleCount + 3)}
          >
            Show more
          </button>
        </div>
      )}
    </section>
  );
}

export default NewsCardList;
