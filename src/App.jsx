import React, { useState } from "react";
import { pagesData } from "./data";
import SubPage from "./components/SubPage";
import HomeContent from "./components/HomeContent";

export default function GokturkPetshopSite() {
  const [activePage, setActivePage] = useState("home");
  if (activePage !== "home" && pagesData[activePage]) {
    return <SubPage activePage={activePage} setActivePage={setActivePage} />;
  }
  return <HomeContent setActivePage={setActivePage} />;
}
