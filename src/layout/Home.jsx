import React from "react";
import LeftMenu from "./home/LeftMenu";
import HomeContent from "./home/HomeContent";

export default function Home() {
  return (
    <div>
      <h1>HomeLayout</h1>
      <HomeContent />
      <LeftMenu />
    </div>
  );
}
