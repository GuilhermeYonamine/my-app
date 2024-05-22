// src/pages/RegisterAbsence.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import API_BASE_URL from "../ApiConfig";

const RegisterAbsence = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState("");
  const [attendance, setAttendance] = useState(true);
  const [justification, setJustification] = useState("");

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/alunos`)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the students!", error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const absenceData = {
      idAula: 1, // ID da aula, pode ser dinâmico
      idAluno: selectedStudent,
      presenca: attendance,
      justificativa: justification,
    };
    axios
      .post(`${API_BASE_URL}/api/faltas`, absenceData)
      .then((response) => {
        alert("Falta registrada com sucesso!");
      })
      .catch((error) => {
        console.error("There was an error registering the absence!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Aluno:
        <select
          value={selectedStudent}
          onChange={(e) => setSelectedStudent(e.target.value)}
        >
          <option value="">Selecione um aluno</option>
          {students.map((student) => (
            <option key={student.id_aluno} value={student.id_aluno}>
              {student.nome}
            </option>
          ))}
        </select>
      </label>
      <label>
        Presença:
        <input
          type="checkbox"
          checked={attendance}
          onChange={(e) => setAttendance(e.target.checked)}
        />
      </label>
      <label>
        Justificativa:
        <textarea
          value={justification}
          onChange={(e) => setJustification(e.target.value)}
        />
      </label>
      <button type="submit">Registrar Falta</button>
    </form>
  );
};

export default RegisterAbsence;
