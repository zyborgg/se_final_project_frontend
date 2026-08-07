import Navigation from "../Navigation/Navigation";
import NewsExplorerWhite from "../../assets/NewsExplorerWhite.svg";
import NewsExplorerBlack from "../../assets/NewsExplorerBlack.svg";
import "./Header.css";

function Header({
  isLoggedIn,
  onLoginClick,
  onLogoutClick,
  userName,
  isSavedNewsPage,
}) {
  return (
    <header className={`header ${isSavedNewsPage ? "header--light" : ""}`}>
      <div className="header__logo-wrapper">
        <img
          className="header__logo"
          src={isSavedNewsPage ? NewsExplorerBlack : NewsExplorerWhite}
          alt="NewsExplorer"
        />
      </div>

      <div className="header__nav">
        <Navigation
          isLoggedIn={isLoggedIn}
          userName={userName}
          onLoginClick={onLoginClick}
          onLogoutClick={onLogoutClick}
          isSavedNewsPage={isSavedNewsPage}
        />
      </div>
    </header>
  );
}

export default Header;
