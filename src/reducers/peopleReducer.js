import {
  FETCH_PEOPLE_BEGIN,
  FETCH_PEOPLE_SUCCESS,
  FETCH_PEOPLE_FAILURE
} from "../constants/appConstants.js";

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function userReducer(
    state = initialState,
    action
  ) {
  switch (action.type) {
    case FETCH_PEOPLE_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.people
      };
    case FETCH_PEOPLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
}
