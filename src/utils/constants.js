export const BackgroundImage =
  "https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg";
export const MradulPhoto =
  "https://media.licdn.com/dms/image/C4D03AQGSa6zOoFxoAA/profile-displayphoto-shrink_200_200/0/1660130677170?e=2147483647&v=beta&t=Z3u768iUJDR0oEGgI8x3cSH8d87dkFdtJ3PdlvnSY2s";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "punjabi", name: "Punjabi" },
];
