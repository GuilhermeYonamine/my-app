// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import RegisterAbsence from './pages/registroFalta';
import ListAlunos from './pages/listAluno';
import BuscarAluno from './pages/buscarAluno';
import './App.css'; // Se você tiver um arquivo CSS para estilização

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/registroFalta">Registrar Falta</Link></li>
            <li><Link to="/list-alunos">Listar Alunos</Link></li>
            <li><Link to="/buscar-aluno">Buscar Aluno</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registroFalta" element={<RegisterAbsence />} />
          <Route path="/list-alunos" element={<ListAlunos />} />
          <Route path="/buscar-aluno" element={<BuscarAluno />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
