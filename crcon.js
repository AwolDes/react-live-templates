// React Container
import React from "react";
import { connect } from "react-redux";
import $COMPONENT$ from "./page.js";
import {
  $FUNCTION_NAME$
} from "./actions";

const mapStateToProps = (state) => {
  return {
    
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    $FUNCTION_NAME$: ($PARAMS$) => {
      dispatch($FUNCTION_NAME$($PARAMS$));
    }
  };
};

const $CONTAINER_NAME$ = connect(
  mapStateToProps,
  mapDispatchToProps
)($COMPONENT$);

export default $CONTAINER_NAME$;
