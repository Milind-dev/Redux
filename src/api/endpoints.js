// import { ENV } from "../config/env";

// export const API_ENDPOINTS = {
//   PRODUCTS: `${ENV.BASE_URL}/products`,
//   JSONAPI: `${ENV.JSON_URL}/posts`,
// };

import { ENV } from "../config/env";

export const API_ENDPOINTS = {
  PRODUCTS: `${ENV.BASE_URL}/products`,
  JSONAPI: `${ENV.JSON_URL}/posts`,
};

console.log("JSON ENDPOINT 👉", `${ENV.JSON_URL}/posts`);
