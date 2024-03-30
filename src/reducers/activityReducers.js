// reducers/activityReducer.js
import {
    LIST_ACTIVITIES_REQUEST,
    LIST_ACTIVITIES_SUCCESS,
    LIST_ACTIVITIES_FAIL,
  } from '../constants/activityConstants';
  
  export const activityListReducer = (state = { activities: [] }, action) => {
      switch (action.type) {
          case LIST_ACTIVITIES_REQUEST:
              return { loading: true, activities: [] };
          case LIST_ACTIVITIES_SUCCESS:
              return { loading: false, activities: action.payload };
          case LIST_ACTIVITIES_FAIL:
              return { loading: false, error: action.payload };
          default:
              return state;
      }
  };
  