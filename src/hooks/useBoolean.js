import React from "react";

function useBoolean(initialState = false) {
  const [booleanState, setBooleanState] = React.useState(initialState);
  const updateBooleanState = {
    on: () => setBooleanState(true),
    off: () => setBooleanState(false),
    onToggle: () => setBooleanState(!booleanState),
  };

  return [booleanState, updateBooleanState];
}

export default useBoolean;
