import SearchForm from "../SearchForm/SearchForm";
import PreLoader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import About from "../About/About";
import frontPageBackground from "../../assets/frontPageBackground.svg";
import "./Main.css";

function Main({ isLoading, articles, onSearch, isLoggedIn, onSaveArticle }) {
  return (
    <>
      <main
        className="main"
        style={{ backgroundImage: `url(${frontPageBackground})` }}
      >
        <h2 className="main__title">What's going on in the World?</h2>
        <p className="main__subtitle">
          Find the latest news on any topic and save them in your personal
          account
        </p>
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
      </main>
      <About />
    </>
  );
}

export default Main;
