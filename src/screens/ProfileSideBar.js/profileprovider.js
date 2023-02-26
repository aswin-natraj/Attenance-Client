import React from "react";

const ProfileContext = React.createContext();

export function profileprovider() {
  const mContext = {};
  return <ProfileContext.Provider value={mContext}></ProfileContext.Provider>;
}

export const withProfileProvider = (Container, containerProps = {}) => {
  return () => {
    <ProfileContext>
      <Container {...containerProps} />
    </ProfileContext>;
  };
};

export default profileprovider;
