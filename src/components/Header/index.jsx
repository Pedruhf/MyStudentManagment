import React from "react";
import './styles.css';

import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Card>
      <Card.Header>
        <div className="logo">
          <span>MyStudentManagment</span>
        </div>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/seus-alunos">Alunos</Link>
          <Link to="/suas-turmas">Turmas</Link>
        </nav>
      </Card.Header>
    </Card>
  )
}