import React, { useState } from "react";
import "./styles.css";

import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { useDispatch } from 'react-redux';

function StudentRegister({ classes, students }) {
  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({});

  function handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const sortedStudents = students.sort((a, b) => {
      return a.id < b.id ? 1 : -1;
    });

    const id = sortedStudents[0].id + 1;

    dispatch({type: 'ADD_STUDENT', payload: { ...inputs, id }});
  }

  return (
    <div className="student-register">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="student-name mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            name="name"
            value={inputs.name || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Digite o nome do aluno"
          />
        </Form.Group>

        <Form.Group className="student-name mb-3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            required
            name="email"
            value={inputs.email || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Digite o email do aluno"
          />
        </Form.Group>

        <Form.Group className="student-name mb-3">
          <Form.Label>Curso</Form.Label>
          <Form.Control
            required
            name="course"
            value={inputs.course || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Digite o curso do aluno"
          />
        </Form.Group>

        <Form.Group className="student-name mb-3">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            required
            name="phone"
            value={inputs.phone || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Digite o telefone do aluno"
          />
        </Form.Group>

        <Form.Group className="student-name mb-3">
          <Form.Label>Matrícula</Form.Label>
          <Form.Control
            required
            name="registration"
            value={inputs.registration || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Digite a matricula do aluno"
          />
        </Form.Group>

        <Form.Group className="student-name mb-3">
          <Form.Label>Ano de entrada</Form.Label>
          <Form.Control
            required
            name="entryYear"
            value={inputs.entryYear || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Digite o ano de entrada do aluno"
          />
        </Form.Group>

        <Form.Group className="student-name mb-3">
          <Form.Label>Semetre atual</Form.Label>
          <Form.Control
            required
            name="period"
            value={inputs.period || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Digite o semestre atual do aluno"
          />
        </Form.Group>

        <Form.Group className="student-name mb-3">
          <Form.Label>Gênero</Form.Label>
          <Form.Select required name="gender" value={inputs.gender || ''} onChange={handleInputChange} aria-label="Gênero">
            <option>Selecione o gênero do aluno</option>
            <option value="Feminino">Feminino</option>
            <option value="Masculino">Masculino</option>
            <option value="Outro">Outro</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="student-name mb-3">
          <Form.Label>Data de nascimento</Form.Label>
          <Form.Control
            required
            name="birthDate"
            value={inputs.birthDate || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Digite a data de nascimento do aluno"
        />
        </Form.Group>

        <Form.Group className="student-name mb-3">
          <Form.Label>Raça</Form.Label>
          <Form.Control
            required
            name="breed"
            value={inputs.breed || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Digite a raça do aluno"
          />
        </Form.Group>

        <Form.Group className="student-name mb-3">
          <Form.Label>Nacionalidade</Form.Label>
          <Form.Control
            required
            name="nationality"
            value={inputs.nationality || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Digite a nacionalidade do aluno"
          />
        </Form.Group>

        <Form.Group className="student-name mb-3">
          <Form.Label>Foto</Form.Label>
          <Form.Control
            name="imageUrl"
            value={inputs.imageUrl || ''}
            onChange={handleInputChange}
            type="text"
            placeholder="Digite a URL da foto do aluno"
          />
        </Form.Group>

        <Form.Group className="student-name mb-3">
          <Form.Label>Turma</Form.Label>
          <Form.Select required name="class" value={inputs.class || ''} onChange={handleInputChange} aria-label="Turma">
            <option>Selecione a turma</option>
            {classes.map(classData => (<option key={classData.id}>{classData.name}</option>))}
          </Form.Select>
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
  students: state.students.alunos
});

export default connect(mapStateToProps)(StudentRegister);
