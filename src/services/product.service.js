import { get } from "./httpClient";
import { API_ENDPOINTS } from "../api/endpoints";

export const fetchProductsAPI = () => {
  return get(API_ENDPOINTS.PRODUCTS);
};
