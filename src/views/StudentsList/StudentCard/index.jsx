import React from "react";
import './styles.css';

import { Card } from 'react-bootstrap';
import StudentModal from "./StudentModal";

export default function StudentCard({ student }) {

  return (
    <div className="student-card">
      <Card>
        <div className="student-image">
          <i className="fas fa-user"></i>
        </div>
        <div className="student-info">
          <span>Nome: {student.nome}</span>
          <span>E-mail: {student.email}</span>
          <span>Curso: {student.curso}</span>
          <span>Telefone: {student.telefone}</span>
          <StudentModal />
        </div>
      </Card>
    </div>
  )
}