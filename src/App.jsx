import React, { useState } from "react";
import { pagesData } from "./data";
import SubPage from "./SubPage"; // Direkt yan yana çağırdık, hata riski bitti
import HomeContent from "./HomeContent"; // Direkt yan yana çağırdık

export default function GokturkPetshopSite() {
  const [activePage, setActivePage] = useState("home");
  if (activePage !== "home" && pagesData[activePage]) {
    return <SubPage activePage={activePage} setActivePage={setActivePage} />;
  }
  return <HomeContent setActivePage={setActivePage} />;
}
