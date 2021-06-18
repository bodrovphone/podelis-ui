import React, { useContext } from "react";
import TopNav from "../topNav";
import ST from "./styles";
import { SideBarContext, SideBarDispatch } from "../../context/sideBar.context";
import { matchMedia } from "../../utils";

const Container = ({ children }) => {
  const { navState } = useContext(SideBarContext);
  const { toggleNav } = useContext(SideBarDispatch);

  const shouldToggle = (e) => {
    if (navState && matchMedia("max-width: 572px")) {
      toggleNav(false);
      // preventDefault doesn't work for Next Links
      e.preventDefault();
    }
  };

  return (
    <>
      <ST.Wrapper
        className={`${navState ? "active" : ""}`}
        onClick={shouldToggle}
      >
        <TopNav />
        {children}
      </ST.Wrapper>
    </>
  );
};

export default Container;
