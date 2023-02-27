import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./MainLayout.css";
import FooterLogo from "../../assets/TESARK_Logo_3x-removebg-preview.png";

import Profile from "../../screens/ProfileSideBar.js/containers/profile";
import Header from "../../screens/headerSearch/header";
import MenuBar from "../../screens/menuBar.js/menuBar";
import Home from "../../screens/pages/Home/Home";
import { Image, VStack } from "@chakra-ui/react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

function MainLayout(e) {
  const navigate = useNavigate();

  // React.useEffect(() => {
  //   document.addEventListener("keydown", detectKeyDown, true);
  // }, []);

  // const detectKeyDown = (e) => {
  //   if (e.ctrlKey && e.keyCode == 49) {
  //     e.preventDefault();
  //     data();
  //   }
  // };
  // const data = () => {
  //   window.location.reload();
  // };

  return (
    <div className="container">
      <div className="header">
        <Header />{" "}
      </div>
      <div className="mainContent">
        <Home />
      </div>

      <div className="left_sidebar">
        <Profile />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          height: "auto",
          alignItems: "center",
        }}
        className="footer"
      >
        <VStack>
          <div style={{ fontSize: "10px" }}>Powered By</div>
          <div>
            <Image width={"14"} src={FooterLogo} alt="footer-logo" />
          </div>
        </VStack>
      </div>
    </div>
  );
}

export default MainLayout;
