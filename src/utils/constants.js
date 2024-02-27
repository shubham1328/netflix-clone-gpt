export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-5690-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZWU4OTg0Njc4NjcxNjIxOWQ1N2JkZDRmYzJiN2VjMyIsInN1YiI6IjY1ZGFmNTE4NjJmMzM1MDE3YzRjZjRjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UX2MGmL-YuUMMbE28YbmJcqZ9yY0UPyYE6yMweMJqzs",
    // env key hide for security 
    // Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGE = [
  { identifire: "en", name: "English" },
  { identifire: "hi", name: "Hindi" },
  { identifire: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = "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";
// export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;