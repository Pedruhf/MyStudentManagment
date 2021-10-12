import React, { useEffect, useState } from "react";
import './styles.css';

import { Card, Button } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";

export default function MobileMenu() {
  const currentPage = useLocation().pathname;
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
              <Link style={currentPage === '/' ? {background: '#CCC'} : {}} onClick={() => toggleMenu('close')} to="/"><span>Início</span></Link>
              <Link style={currentPage === '/seus-alunos' ? {background: '#CCC'} : {}} onClick={() => toggleMenu('close')} to="/seus-alunos"><span>Alunos</span></Link>
              <Link style={currentPage === '/suas-turmas' ? {background: '#CCC'} : {}} onClick={() => toggleMenu('close')} to="/suas-turmas"><span>Turmas</span></Link>
              <Link style={currentPage === '/cadastrar-alunos' ? {background: '#CCC'} : {}} onClick={() => toggleMenu('close')} to="/cadastrar-alunos"><span>Cadastrar alunos</span></Link>
              <Link style={currentPage === '/cadastrar-turmas' ? {background: '#CCC'} : {}} onClick={() => toggleMenu('close')} to="/cadastrar-turmas"><span>Cadastrar turmas</span></Link>
            </nav>
          </div>
        </Card>
      </div>
    </div>
  )
}