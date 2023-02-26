import React from "react";

const menuContext = React.createContext();

export function menuprovider() {
  const mContext = {};
  return <menuContext.Provider value={mContext}></menuContext.Provider>;
}

export const withMenuProvider = (Container, containerProps = {}) => {
  return () => {
    <menuContext>
      <Container {...containerProps} />
    </menuContext>;
  };
};
