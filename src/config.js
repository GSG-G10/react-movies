export const TRENDS_URL =
  "https://yts.am/api/v2/list_movies.json?sort_by=year&limit=20&minimum_rating=8";
export const SEARCH_MOVIE_URL = (key) => `https://yts.am/api/v2/list_movies.json?sort_by=year&limit=20&query_term=${key}`;
export const SEARCH_NO_QUERY =
  "https://yts.am/api/v2/list_movies.json?sort_by=year&limit=15";
