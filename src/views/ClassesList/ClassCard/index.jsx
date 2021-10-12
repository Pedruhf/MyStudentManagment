import React, { useState } from "react";
import './styles.css';

import { Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import StudentCard from "../../StudentsList/StudentCard";

export default function ClassCard({ classData }) {
  const allStudents = useSelector(state => state.students.alunos);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="classes-card">
      <span>{classData.name}</span>
      <span>Curso: {classData.course}</span>
      <span>Nível: {classData.grade}</span>
      <span>Horário: {classData.data} às {classData.hour}</span>
      
      <Button variant="primary" onClick={handleShow}>
        Informações
      </Button>

      <Modal className="class-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Button className="material-icons" variant="secondary" onClick={handleClose}>
              close
            </Button>
          </Modal.Title>
          <h1>Dados da turma de {classData.name}</h1>
        </Modal.Header>
        <Modal.Body>
          {allStudents.map(student => <StudentCard key={student.id} student={student} />)}
        </Modal.Body>
      </Modal>
    </div>
  )
}