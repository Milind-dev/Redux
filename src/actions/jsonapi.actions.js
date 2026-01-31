import {
  FETCH_JSON_REQUEST,
  FETCH_JSON_SUCCESS,
  FETCH_JSON_FAILURE,
} from "../constants/jsonapiconst.constant";

import { fetchJsonAPI } from "../services/jsonapi.service";

export const fetchJson = () => async (dispatch) => {
  dispatch({ type: FETCH_JSON_REQUEST });
  try {
    const data = await fetchJsonAPI();
    dispatch({ type: FETCH_JSON_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: FETCH_JSON_FAILURE, payload: e.message });
  }
};
