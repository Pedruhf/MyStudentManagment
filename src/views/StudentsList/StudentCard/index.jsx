import React from "react";
import './styles.css';

import { Card } from 'react-bootstrap';
import StudentModal from "./StudentModal";

export default function StudentCard() {

  return (
    <div className="student-card">
      <Card>
        <div className="student-image">
          <i className="fas fa-user"></i>
        </div>
        <div className="student-info">
          <span>Nome: Pedro Henrique de Freitas Silva</span>
          <span>E-mail: Incuba@tech.com</span>
          <span>Curso: Engenharia de computação</span>
          <span>Telefone: (84) 99999-9999</span>
          <StudentModal />
        </div>
      </Card>
    </div>
  )
}