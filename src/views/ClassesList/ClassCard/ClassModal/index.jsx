import React, { useEffect, useState } from "react";
import './styles.css';

import { Card, Button } from 'react-bootstrap';

export default function ClassModal({ student }) {
  const [modal, setModal] = useState();
  
  useEffect(() => {
   setModal(document.getElementById('classModal'));
  }, [modal]);

  function toggleModal(instruction) {
    instruction === 'open' ? modal.style.display = 'flex' : modal.style.display = 'none';
  }

  const class_data = {};

  return (
    <div style={{ alignSelf: "flex-end" }}>
      <Button onClick={() => toggleModal('open')}>Informações</Button>
      <div id="classModal" className="class-modal">
        <Card className="modal-content">
          <button className="material-icons" onClick={() => toggleModal('close')}>close</button>
          <div className="modal-header">
            <h2>Dados da turma Introdução ao CAD</h2>
          </div>

          <div className="class-info">
            <span>Nome: {class_data.name}</span>
            <span>E-mail: {class_data.email}</span>
            <span>Curso: {class_data.course}</span>
            <span>Telefone: {class_data.phone}</span>
            <span>Ano de ingresso: {class_data.entry_year}</span>
            <span>Semestre atual: {class_data.period}</span>
            <span>Genero: {class_data.gender}</span>
            <span>Estado civíl: {class_data.marital_status}</span>
            <span>Data de nascimento: {class_data.birth_date}</span>
            <span>Raça: {class_data.breed}</span>
            <span>Nacionalidade: {class_data.nationality}</span>
          </div>
        </Card>
      </div>
    </div>
  )
}