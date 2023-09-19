import React from "react";
import BrandLogo from "../../componet/leftmenu/BrandLogo";
import Dashboard from "../../componet/leftmenu/Dashboard";
import ThemeList from "./leftmenu/ThemeList";
import ComponetList from "./leftmenu/ComponetList";
import ExtraList from "./leftmenu/ExtraList";

export default function LeftMenu() {
  return (
    <div>
      <h2 style={{color:"blue"}}>LeftMenu</h2>
      <BrandLogo />
      <Dashboard />
      <ThemeList />
      <ComponetList />
      <ExtraList />
    </div>
  );
}
