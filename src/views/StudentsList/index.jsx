import React from "react";
import './styles.css';

import StudentCard from "./StudentCard";
import { connect } from "react-redux";


function StudentsList({ students }) {
  return (
    <div className="students-list">
      {students.map(student => (<StudentCard key={student.id} student={student} />))}
    </div>
  )
}

const mapStateToProps = state => ({
  students: state.students.alunos
});

export default connect(mapStateToProps)(StudentsList);