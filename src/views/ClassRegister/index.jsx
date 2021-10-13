import React, { useState } from "react";
import "./styles.css";

import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { useDispatch } from 'react-redux';

function ClassRegister({ classes }) {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const sortedClasses = classes.sort((a, b) => {
      return a.id < b.id ? 1 : -1;
    });

    const id = sortedClasses[0].id + 1;

    dispatch({type: 'ADD_CLASS', payload: { ...inputs, id, students: [] }});
    setInputs({});
  }

  return (
    <div className="class-register">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="class-name mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            name="name"
            value={inputs.name || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Informe o nome da turma"
          />
        </Form.Group>
        
        <Form.Group className="class-name mb-3">
          <Form.Label>Curso</Form.Label>
          <Form.Control
            required
            name="course"
            value={inputs.course || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Informe o curso a qual esta turma pertence"
          />
        </Form.Group>

        <Form.Group className="class-name mb-3">
          <Form.Label>Nível</Form.Label>
          <Form.Control
            required
            name="grade"
            value={inputs.grade || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Informe o nível da turma (Graduação, Mestrado, etc)"
          />
        </Form.Group>

        <Form.Group className="class-name mb-3">
          <Form.Label>Dia</Form.Label>
          <Form.Control
            required
            name="date"
            value={inputs.date || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Informe os dias da semana que esta turma tem aula"
          />
        </Form.Group>

        <Form.Group className="class-name mb-3">
          <Form.Label>Hora</Form.Label>
          <Form.Control
            required
            name="hour"
            value={inputs.hour || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Informe o horário das aulas da turma"
          />
        </Form.Group>

        <Form.Group className="submit-button mb-3">
          <Button type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
}


const mapStateToProps = state => ({
  classes: state.classes.turmas,
});

export default connect(mapStateToProps)(ClassRegister);