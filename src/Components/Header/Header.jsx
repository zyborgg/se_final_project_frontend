import Navigation from "../Navigation/Navigation";

function Header({ isLoggedIn, onLoginClick, onLogoutClick }) {
  return (
    <header className="header">
      <div className="header__logo">NewsExplorer</div>
      {/* Logo */}
      <Navigation
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
        onLogoutClick={onLogoutClick}
      />
      {/* { SearchForm } */}
    </header>
  );
}

export default Header;
