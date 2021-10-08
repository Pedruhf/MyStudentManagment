import React from "react";
import './styles.css';

import StudentCard from "./StudentCard";

export default function StudentsList() {
  return (
    <div className="students-list">
      <StudentCard />
      <StudentCard />
      <StudentCard />
      <StudentCard />
      <StudentCard />
      <StudentCard />
    </div>
  )
}