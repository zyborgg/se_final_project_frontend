import { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    onSearch(searchTerm);
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
