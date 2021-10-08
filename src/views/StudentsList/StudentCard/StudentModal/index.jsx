import React, { useEffect, useState } from "react";
import './styles.css';

import { Card, Button } from 'react-bootstrap';

export default function StudentModal() {
  const [modal, setModal] = useState();
  
  useEffect(() => {
   setModal(document.getElementById('studentModal'));
  }, [modal]);

  function toggleModal(instruction) {
    instruction === 'open' ? modal.style.display = 'flex' : modal.style.display = 'none';
  }

  return (
    <div style={{ alignSelf: "flex-end" }}>
      <Button onClick={() => toggleModal('open')}>Informações</Button>
      <div id="studentModal" className="student-modal">
        <Card className="modal-content">
          <div className="modal-header">
            <h1>Informações</h1>
            <button className="material-icons" onClick={() => toggleModal('close')} >close</button>
          </div>
        </Card>
      </div>
    </div>
  )
}