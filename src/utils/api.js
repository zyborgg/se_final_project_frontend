import {
  NEWS_API_BASE_URL,
  NEWS_API_KEY,
  PAGE_SIZE,
  DAYS_BACK,
} from "./config";

function getDateRange() {
  const today = new Date();
  const lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - DAYS_BACK);

  return {
    from: lastWeek.toISOString(),
    to: today.toISOString(),
  };
}

function normalizeArticle(article) {
  return {
    title: article.title || "No title available",
    description: article.description || "No description available",
    source: article.source?.name || "Unknown source",
    publishedAt: article.publishedAt
      ? new Date(article.publishedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : "Unknown date",
    urlToImage: article.urlToImage || "/fallback-image.png",
    link: article.url,
  };
}

export async function searchNews(query) {
  const { from, to } = getDateRange();

  const url = `${NEWS_API_BASE_URL}?q=${query}&from=${from}&to=${to}&sortBy=publishedAt&language=en&pageSize=${PAGE_SIZE}&apiKey=${NEWS_API_KEY}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("News API request failed");
  }

  const data = await res.json();
  return data.articles.map(normalizeArticle);
}
