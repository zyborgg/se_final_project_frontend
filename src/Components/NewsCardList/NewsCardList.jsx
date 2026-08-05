import "./NewsCardList.css";

function NewsCardList({ articles, isLoggedIn, onSave }) {
  return (
    <section className="news-card-list">
      <h2 className="news-card-list__title">Search results</h2>

      <div className="news-card-list__grid">
        {articles.map((article, index) => (
          <NewsCard
            key={index}
            article={article}
            isLoggedIn={isLoggedIn}
            onSave={onSave}
          />
        ))}
      </div>
    </section>
  );
}

export default NewsCardList;
