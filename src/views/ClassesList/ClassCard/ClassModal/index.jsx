import React, { useEffect, useState } from "react";
import './styles.css';

import { connect } from "react-redux";
import { Card, Button } from 'react-bootstrap';
import StudentCard from "../../../StudentsList/StudentCard";

function ClassModal({ students, classData }) {
  const [modal, setModal] = useState();
  
  useEffect(() => {
   setModal(document.getElementById('classModal'));
  }, [modal]);

  function toggleModal(instruction) {
    instruction === 'open' ? modal.style.display = 'flex' : modal.style.display = 'none';
  }

  return (
    <div style={{ alignSelf: "flex-end" }}>
      <Button onClick={() => toggleModal('open')}>Informações</Button>
      <div id="classModal" className="class-modal">
        <Card className="modal-content">
          <button className="material-icons" onClick={() => toggleModal('close')}>close</button>
          <div className="modal-header">
            <h2>{classData.name}</h2>
          </div>

          <div className="class-info">
            {students.map(student => (<StudentCard key={student.id} student={student} />))}
          </div>
        </Card>
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  students: state.students.alunos
});

export default connect(mapStateToProps)(ClassModal);