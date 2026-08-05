import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import frontPageBackground from "../../assets/frontPageBackground.svg";
import nothingFound from "../../assets/nothingFound.svg";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main({
  isLoading,
  articles,
  onSearch,
  hasSearched,
  searchError,
  errorMessage,
  isLoggedIn,
  onSavedArticle,
}) {
  return (
    <>
      <main className="main">
        <div className="main__content">
          <h2 className="main__title">What's going on in the World?</h2>
          <p className="main__subtitle">
            Find the latest news on any topic and save them in your personal
            account.
          </p>
          <SearchForm onSearch={onSearch} />
          {/* SEARCH FORM ERROR  */}
          {searchError && <p className="main__error">{searchError}</p>}
        </div>

        {/* REQUEST ERROR */}
        {errorMessage && <p className="main__error">{errorMessage}</p>}

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
          <NewsCardList
            articles={articles}
            isLoggedIn={isLoggedIn}
            onSave={onSavedArticle}
          />
        )}
      </main>
    </>
  );
}

export default Main;
