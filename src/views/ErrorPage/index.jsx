import React from "react";
import './styles.css';

import Error404Image from '../../images/error404.png';
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <main className="error-page">
      <img src={Error404Image} alt="Error" />
      <p>Erro 404 - Página não encontrada </p>
      <span>A página que você tentou acessar não existe</span>
      <Link to="/">Voltar ao início</Link>
    </main>
  );
}