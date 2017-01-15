// React Action boilerplate
import fetch from "isomorphic-fetch";
import {GetAPI, PostAPI} from "../modules/API"; // change this path

export const $ACTION_NAME$ = "$ACTION_NAME$"; 

export const $NAME$ = ($PARAMS$) => {
  return dispatch => {
    dispatch({type: $ACTION_NAME$});
    
  };
};
