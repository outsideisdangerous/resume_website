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
        <button id="tm" onClick={() => toggleTab(0)}>
          Outside is Dangerous
        </button>
        <nav className="nav-bar">
          <ul className="button-container">
            <li>
              <button onClick={() => toggleTab(1)}>Tech+Skills</button>
            </li>
            <li>
              <button onClick={() => toggleTab(2)}>Contact</button>
            </li>
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
        {tabIndex === 1 && (
          <>
            <header>
              <h3>Languages and Libraries</h3>
            </header>
            <li>
              <ul>
                <h4> JavaScript + React Library</h4>
                <p>useState</p>
                <p>useEffect</p>
                <p>Fetch, Context API</p>
                <p>Routing</p>
              </ul>
              <ul>
                <h4> HTML</h4>
                <p>Tagging</p>
                <p>Nesting</p>
              </ul>
              <ul>
                <h4> CSS</h4>
                <p>Styling Elements</p>
                <p>Positioning Elements</p>
                <p>Flexbox</p>
                <p>Grid</p>
                <p>Media Query</p>
              </ul>
              <ul>
                <h4> Python</h4>
              </ul>
            </li>
          </>
        )}
        {tabIndex === 2 && (
          <>
            <header>
              <h3>Contact</h3>
            </header>
            <li>
              <ul>
                <a
                  className="urlink"
                  href="https://github.com/outsideisdangerous"
                >
                  GitHub
                </a>
              </ul>

              <ul>
                <a className="urlink" href="https://linkedin.com/in/jayshin2">
                  LinkedIn
                </a>
              </ul>
            </li>
          </>
        )}
      </main>
    </section>
  );
}

export default App;
