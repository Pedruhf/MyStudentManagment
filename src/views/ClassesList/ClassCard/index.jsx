import React from "react";
import ClassModal from "./ClassModal";
import './styles.css';

export default function ClassCard() {

  return (
    <div className="classes-card">
      <span>Introdução ao CAD</span>
      <span>Curso: Engenharia de materiais</span>
      <span>Nível: Graduação</span>
      <span>Horário: Segunda-feira às 10:50 - 12:00</span>
      <ClassModal />
    </div>
  )
}