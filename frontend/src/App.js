import React, { useState } from 'react';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de App', 'Front-end web']);

  function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`); // muda o projects, é mutavel

    setProjects([...projects, `Novo projeto ${Date.now()}`]); // aqui aplica-se imutabilidade
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;