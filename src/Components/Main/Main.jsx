import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import PreLoader from "../Preloader/Preloader";
import NewsCard from "../NewsCard/NewsCard";
import frontPageBackground from "../../assets/frontPageBackground.svg";
import nothingFound from "../../assets/nothingFound.svg";
import "./Main.css";

function Main({
  isLoading,
  articles,
  onSearch,
  hasSearched,
  isLoggedIn,
  onSaveArticle,
}) {
  return (
    <>
      <main className="main">
        <div className="main__content">
          <h2 className="main__title">What's going on in the World?</h2>
          <p className="main__subtitle">
            Find the latest news on any topic and save them in your personal
            account
          </p>
          <SearchForm onSearch={onSearch} />
        </div>
        {isLoading && <PreLoader />}

        {hasSearched && !isLoading && articles.length === 0 && (
          <section className="main__no-results">
            <img
              className="no-results__icon"
              src={nothingFound}
              alt="magnifying frownie face"
            />
            <h2 className="no-results__title">Nothing found</h2>
            <p className="no-results__text">
              Sorry, but nothing matched
              <br />
              your search terms.
            </p>
          </section>
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
    </>
  );
}

export default Main;
