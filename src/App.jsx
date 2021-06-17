import React, { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { workHistories, academics } from "./components/work";
// import { ReactComponent as PythonLogo } from "./image/python-logo-inkscape.svg";

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
            <div className="centered">Website of Jay Shin</div>
          </div>
        )}
        {tabIndex === 1 && (
          <div className="wrapper">
            <div className="box">
              <header>
                <h3>Languages and Libraries</h3>
              </header>
              <li className="list-container">
                <div>
                  <FaReact className="react" />
                  <h4> JavaScript + React</h4>
                  <p>useState</p>
                  <p>useEffect</p>
                  <p>Fetch, Context API</p>
                  <p>Routing</p>
                </div>
                <div>
                  <FaHtml5 className="html" />
                  <h4> HTML</h4>
                  <p>Tagging</p>
                  <p>Nesting</p>
                </div>
                <div>
                  <FaCss3Alt className="css" />
                  <h4> CSS</h4>
                  <p>Styling Elements</p>
                  <p>Positioning Elements</p>
                  <p>Flexbox</p>
                  <p>Grid</p>
                  <p>Media Query</p>
                </div>
                <div>
                  <FaPython className="python" />
                  <h4> Python</h4>
                </div>
              </li>
            </div>
          </div>
        )}
        {tabIndex === 2 && (
          <div className="list-container-2">
            <div className="motown">
              <img src="https://i.imgur.com/NHI8bm0.jpg" alt="Jay" />
            </div>
            <h1 className="jay">Jay Shin</h1>
            <p className="title">Pharmacist/Front-End Dev</p>
            <p>University of South Australia</p>

            <a className="urlink" href="https://github.com/outsideisdangerous">
              <FaGithub />
            </a>
            <a className="urlink" href="https://linkedin.com/in/jayshin2">
              <FaLinkedin />
            </a>
            <a href="mailto:jaehanshin1@gmail.com">
              <button className="contact-btn" type="submit">
                Contact
              </button>
            </a>
          </div>
        )}
      </main>
    </section>
  );
}

export default App;
