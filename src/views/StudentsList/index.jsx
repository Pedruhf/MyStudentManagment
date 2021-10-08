import React, { useEffect, useState } from "react";
import './styles.css';

import axios from "axios";

import StudentCard from "./StudentCard";

async function getStudent() {
  const res = await axios('http://localhost:3001/alunos');
  return res.data;
}

export default function StudentsList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudent().then(res => setStudents(res));
  }, []);

  return (
    <div className="students-list">
      {students.map(student => (<StudentCard key={student.id} student={student} />))}
    </div>
  )
}