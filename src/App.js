import React, { useState } from "react";

import "./global.css";
import "./App.css";
import "./aside.css";
import "./main.css";

function App() {
  const [github_username, setGithubUserName] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const handleAddDev = e => {
    e.preventDefault();
  };

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do github</label>
            <input
              type="text"
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUserName(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              type="text"
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" onClick={handleAddDev}>
            Salvar
          </button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/4295523?s=400&v=4"
                alt="Fabio Teixeira"
              />
              <div className="user-info">
                <strong>Fabio Teixeira</strong>
                <span>JavaScript, React, Python, Django</span>
              </div>
            </header>

            <p>
              Student of Software Engineer in University of Brasilia and
              JavaScript lover.
            </p>

            <a href="https://github.com/fabio1079/">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/4295523?s=400&v=4"
                alt="Fabio Teixeira"
              />
              <div className="user-info">
                <strong>Fabio Teixeira</strong>
                <span>JavaScript, React, Python, Django</span>
              </div>
            </header>

            <p>
              Student of Software Engineer in University of Brasilia and
              JavaScript lover.
            </p>

            <a href="https://github.com/fabio1079/">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/4295523?s=400&v=4"
                alt="Fabio Teixeira"
              />
              <div className="user-info">
                <strong>Fabio Teixeira</strong>
                <span>JavaScript, React, Python, Django</span>
              </div>
            </header>

            <p>
              Student of Software Engineer in University of Brasilia and
              JavaScript lover.
            </p>

            <a href="https://github.com/fabio1079/">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
