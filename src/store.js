import { createStore } from "redux";

const initialState = { userInfo: [], athleteData: [], monthlyData: [] };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "USER_INFO":
      return { ...state, userInfo: action.payload };
    case "ATHLETE_DATA":
      return {
        ...state,
        athleteData: action.payload,
      };
    case "MONTHLY_DATA":
      return {
        ...state,
        monthlyData: action.payload,
      };
    default:
      return state;
  }
}

export default createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
