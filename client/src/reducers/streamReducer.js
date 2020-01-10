import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    // Firebase will listen for changes in the entire collection of streams
    // and automatically update the state so there is no need to implement a
    // state updates through reducers.
    case CREATE_STREAM:
      return { ...state };

    case EDIT_STREAM:
      return { ...state };

    case DELETE_STREAM:
      return { ...state };

    default:
      return state;
  }
};

export default streamReducer;
