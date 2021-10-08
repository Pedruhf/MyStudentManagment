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
          <span>Nome: {student.name}</span>
          <span>E-mail: {student.email}</span>
          <span>Curso: {student.course}</span>
          <span>Telefone: {student.phone}</span>
          <StudentModal student={student} />
        </div>
      </Card>
    </div>
  )
}