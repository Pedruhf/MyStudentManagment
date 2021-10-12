import React, { useEffect, useState } from "react";
import './styles.css';

import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

export default function Header() {

  function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState();

    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowWidth;
  }

  return (
    <Card>
      <Card.Header>
        <div className="logo">
        <Link to="/"><span>MyStudentManagement</span></Link>
        </div>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/seus-alunos">Alunos</Link>
          <Link to="/suas-turmas">Turmas</Link>
        </nav>
        {useWindowWidth() <= 768 && (<MobileMenu />)} 
      </Card.Header>
    </Card>
  )
}