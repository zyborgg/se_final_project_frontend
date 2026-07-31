import SearchForm from "../SearchForm/SearchForm";
import PreLoader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";
import "./Main.css";

function Main({ isLoading, articles, onSearch, isLoggedIn, onSaveArticle }) {
  return (
    <main className="main">
      <SearchForm onSearch={onSearch} />

      {isLoading && <PreLoader />}

      {!isLoading && articles.length === 0 && (
        <p className="main__empty">
          No results yet. Try searching for something
        </p>
      )}

      {!isLoading && articles.length > 0 && (
        <section className="main__results">
          {articles.map((article, index) => (
            <NewsCard
              key={index}
              article={article}
              isLoggedIn={isLoggedIn}
              onSave={onSaveArticle}
            />
          ))}
        </section>
      )}
      <About />
    </main>
  );
}

export default Main;
