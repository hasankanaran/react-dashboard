import React from "react";
import SocialCard from "./socialstats/SocialCard.jsx";

export default function SocialStats() {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{padding:'10px'}}>
        <SocialCard />
      </div>
      <div style={{padding:'10px'}}>
        <SocialCard />
      </div>
      <div style={{padding:'10px'}}>
        <SocialCard />
      </div>
    </div>
  );
}
