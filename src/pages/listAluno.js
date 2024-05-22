// src/pages/ListAlunos.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../ApiConfig.js";

const ListAlunos = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/alunos`)
      .then((response) => {
        setAlunos(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the students!", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Alunos</h1>
      <ul>
        {alunos.map((aluno) => (
          <li key={aluno.id_aluno}>{aluno.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListAlunos;
