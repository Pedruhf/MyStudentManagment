import React, { useState } from "react";
import './styles.css';

import { Card, Button, Modal } from 'react-bootstrap';

export default function StudentCard({ student }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <div className="student-card">
      <Card>
      {student.image_url === '' ?
          (
            <div className="student-image">
              <i className="fas fa-user"></i>
            </div> 
          ) :
          (
            <div className="student-image">
              <img src={student.image_url} alt="user"/>
            </div>
          )
        }
      
        <div className="student-info">
          <span>Nome: {student.name}</span>
          <span>E-mail: {student.email}</span>
          <span>Curso: {student.course}</span>
          <span>Telefone: {student.phone}</span>

          <Button variant="primary" onClick={handleShow}>
            Informações
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <Button className="material-icons" variant="secondary" onClick={handleClose}>
                  close
                </Button>
              </Modal.Title>
              <h1>Dados do(a) {student.name.split(' ')[0]}</h1>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
          </Modal>
        </div>
      </Card>
    </div>
  )
}