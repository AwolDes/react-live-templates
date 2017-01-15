// React Reducer
import {$DISPATCHES$} from "./actions";

const initialState = {
  
};

export default function $COMPONENT$(state = initialState, action) {
  switch (action.type) {
    case $DISPATCH$:
      return Object.assign({}, state, {
      
      });
      
    default:
      return state;
  }
}
