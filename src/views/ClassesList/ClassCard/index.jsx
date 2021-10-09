import React from "react";
import ClassModal from "./ClassModal";
import './styles.css';

export default function ClassCard({ classData }) {

  return (
    <div className="classes-card">
      <span>{classData.name}</span>
      <span>Curso: {classData.course}</span>
      <span>Nível: {classData.grade}</span>
      <span>Horário: {classData.data} às {classData.hour}</span>
      <ClassModal classData={classData} />
    </div>
  )
}