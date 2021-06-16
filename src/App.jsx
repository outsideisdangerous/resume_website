import React, { useState } from "react";
import { workHistories, academics } from "./components/work";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const toggleTab = (index) => {
    setTabIndex(index);
  };

  return (
    <section>
      <header>
        <button id="tm">Outside is Dangerous</button>

        <nav>
          <ul className="nav-bar">
            <button onClick={() => toggleTab(1)}>Tech+Skills</button>
            <button className="contact-hover" onClick={() => toggleTab(2)}>
              Contact
            </button>
          </ul>
        </nav>
      </header>
    </section>
  );
}

export default App;
