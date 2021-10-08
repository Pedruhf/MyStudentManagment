import React, { useEffect, useState } from "react";
import './styles.css';

import { Card, Button } from 'react-bootstrap';

export default function StudentModal({ student }) {
  const [modal, setModal] = useState();
  
  useEffect(() => {
   setModal(document.getElementById('studentModal'));
  }, [modal]);

  function toggleModal(instruction) {
    instruction === 'open' ? modal.style.display = 'flex' : modal.style.display = 'none';
  }

  return (
    <div style={{ alignSelf: "flex-end" }}>
      <Button onClick={() => toggleModal('open')}>Informações</Button>
      <div id="studentModal" className="student-modal">
        <Card className="modal-content">
          <button className="material-icons" onClick={() => toggleModal('close')}>close</button>
          <div className="modal-header">
            <h2>Dados de {student.name}</h2>
          </div>

          <div className="student-info">
            <span>Nome: {student.name}</span>
            <span>E-mail: {student.email}</span>
            <span>Curso: {student.course}</span>
            <span>Telefone: {student.phone}</span>
            <span>Ano de ingresso: {student.entry_year}</span>
            <span>Semestre atual: {student.period}</span>
            <span>Genero: {student.gender}</span>
            <span>Estado civíl: {student.marital_status}</span>
            <span>Data de nascimento: {student.birth_date}</span>
            <span>Raça: {student.breed}</span>
            <span>Nacionalidade: {student.nationality}</span>
          </div>
        </Card>
      </div>
    </div>
  )
}