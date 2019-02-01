import { FETCHED_DATA, ADD_SMURF, DELETE_SMURF, ERROR } from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_DATA:
      return {
        ...state,
        smurfs: action.payload
      };
    case ADD_SMURF:
      console.log(action.payload);
      return {
        ...state,
        smurfs: action.payload
      };
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: action.payload
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
