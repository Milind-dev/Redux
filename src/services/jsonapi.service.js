// import { API_ENDPOINTS } from "../api/endpoints"
// import { get } from "./httpClient"

// export const fetchJson = () => {
//   return get(API_ENDPOINTS.JSONAPI);
// };
import { get } from "./httpClient";
import { API_ENDPOINTS } from "../api/endpoints";

export const fetchJsonAPI = () => {
    console.log(API_ENDPOINTS)
  return get(API_ENDPOINTS.JSONAPI);
};
