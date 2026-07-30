import { useState } from "react";

function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // prevent empty searches
    if (!searchTerm.trim()) return;

    // clear input after search
    onSearch(searchTerm);
    setSearchTerm("");
  }

  return (
    <section className="search-form">
      <form className="search-form__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-form__input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <button type="submit" className="search-form__button">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
