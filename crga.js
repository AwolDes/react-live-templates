return GetAPI("some_url", {$PARAMS$})
  .then(
    data => {
      if ("something" in data) {
        dispatch({ type: $SUCCESS_DISPATCH$, data });
      } else {
        dispatch({ type: $FAILED_DISPATCH$, data });
      }
    },
    data => dispatch({ type: $FAILED_DISPATCH$, err: data })
  );
