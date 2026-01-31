import {
  FETCH_JSON_REQUEST,
  FETCH_JSON_SUCCESS,
  FETCH_JSON_FAILURE,
} from "../constants/jsonapiconst.constant";

const initialState = {
  jsondata: [],
  loading: false,
  error: null,
};

export default function jsonapiReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_JSON_REQUEST:
      return { ...state, loading: true };
    case FETCH_JSON_SUCCESS:
      return { ...state, loading: false, jsondata: action.payload };
    case FETCH_JSON_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
