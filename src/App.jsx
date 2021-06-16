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
      <main>
        {tabIndex === 0 && (
          <div className="main">
            <img
              id="space-blob"
              src="https://images.pexels.com/photos/3109807/pexels-photo-3109807.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
          </div>
        )}
        {tabIndex === 1 && <div>techandskills</div>}
        {tabIndex === 2 && <div>contact</div>}
      </main>
    </section>
  );
}

export default App;
