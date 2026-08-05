export const NEWS_API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://nomoreparties.co/news/v2/everything"
    : "https://newsapi.org/v2/everything";

export const NEWS_API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const PAGE_SIZE = 100;

export const DAYS_BACK = 7;
