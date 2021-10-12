import React, { useEffect, useState } from "react";
import './styles.css';

import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function MobileMenu() {
  const [menu, setMenu] = useState();
  
  useEffect(() => {
   setMenu(document.getElementById('menu'));
  }, [menu]);

  function toggleMenu(instruction) {
    instruction === 'open' ? menu.style.display = 'flex' : menu.style.display = 'none';
  }

  return (
    <div>
      <Button className="main-menu-button" onClick={() => toggleMenu('open')}>
        <i className="fas fa-bars"></i>
      </Button>
      <div id="menu" className="menu">
        <Card className="menu-content">
          <div className="menu-button"><button className="material-icons" onClick={() => toggleMenu('close')} >close</button></div>
          <div className="menu-header">
            <nav>
              <Link onClick={() => toggleMenu('close')} to="/">Início</Link>
              <Link onClick={() => toggleMenu('close')} to="/seus-alunos">Alunos</Link>
              <Link onClick={() => toggleMenu('close')} to="/suas-turmas">Turmas</Link>
              <Link onClick={() => toggleMenu('close')} to="/cadastrar-alunos">Cadastrar alunos</Link>
              <Link onClick={() => toggleMenu('close')} to="/cadastrar-turmas">Cadastrar turmas</Link>
            </nav>
          </div>
        </Card>
      </div>
    </div>
  )
}