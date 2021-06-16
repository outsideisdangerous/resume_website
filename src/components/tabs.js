import { useState } from "react";
import ",/App.css";

function Tabs() {
  return (
    <div className="nav-bar">
      <button className="tabs active-tabs" onClick={() => toggleTab(1)}>
        Tech+Skills
      </button>
      <button className="tabs" onClick={() => toggleTab(2)}>
        Escape
      </button>
      <button className="tabs" onClick={() => toggleTab(3)}>
        Contact
      </button>
    </div>
  );
}
