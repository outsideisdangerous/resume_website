import { useState } from "react";
import { workHistories, academics } from "./components/work";
import Tabs from "./tabs";

function App() {
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState([]);

  return (
    <section>
      <header>
        <div id="tm">Outside is Dangerous</div>

        <nav>
          <ul className="nav-bar">
            <button onClick={() => toggleTab(1)}>Tech+Skills</button>
            <button onClick={() => toggleTab(2)}>Escape</button>
            <button className="contact-hover" onClick={() => toggleTab(3)}>
              Contact
              <img
                id="motown"
                src="https://i.imgur.com/NHI8bm0.jpg"
                alt=""
                width="16rem"
                height="16rem"
              />
            </button>
          </ul>
        </nav>
      </header>
    </section>
  );
}

export default App;
