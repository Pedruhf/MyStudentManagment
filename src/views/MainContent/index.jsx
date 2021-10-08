import React from "react";
import './styles.css';

import { Link } from 'react-router-dom';

import { Card } from 'react-bootstrap';

export default function MainContent() {
  return (
    <main>
      <div>
        <Link to="/seus-alunos">
          <Card className="total-students">
            <div className="card-icon">
              <i className="fas fa-user-graduate"></i>
            </div>
            <div className="card-info">
              <span>50</span>
              <span>Seus alunos</span>
            </div>
          </Card>
        </Link>

        <Link to="suas-turmas">
          <Card className="classes">
            <div className="card-icon">
              <i className="material-icons">class</i>
            </div>
            <div className="card-info">
              <span>50</span>
              <span>Suas turmas</span>
            </div>
          </Card>
        </Link>
      </div>

      <div>
        <Link to="cadastrar-alunos">
          <Card className="students-register">
            <div className="card-icon">
              <i className="fas fa-user-edit"></i>
            </div>
            <div className="card-info">
              <span>50</span>
              <span>Cadastrar novos alunos</span>
            </div>
          </Card>
        </Link>

        <Link to="cadastrar-turmas">
          <Card className="classes-register">
            <div className="card-icon">
              <i className="far fa-edit"></i>
            </div>
            <div className="card-info">
              <span>50</span>
              <span>Cadastrar novas turmas</span>
            </div>
          </Card>
        </Link>
      </div>
      
    </main>
  )
}