const INITIAL_STATE = {
  turmas: [
    {
      "id": 1,
      "name": "Desenvolvimento web",
      "course": "Tecnologia da informação",
      "grade": "Graduação",
      "date": "Segunda-feira",
      "hour": "10:00 - 12:00",
      "students_id": [1, 4, 5, 6]
    },
    {
      "id": 2,
      "name": "Calculo I",
      "course": "Tecnologia da informação",
      "grade": "Graduação",
      "date": "Quarta-feira",
      "hour": "08:00 - 10:00",
      "students_id": [2, 3, 5, 6]
    },
    {
      "id": 3,
      "name": "Álgebra Linear",
      "course": "Tecnologia da informação",
      "grade": "Graduação",
      "date": "Sexta-feira",
      "hour": "14:00 - 16:00",
      "students_id": [1, 3, 4, 6]
    },
    {
      "id": 4,
      "name": "Internet das coisas",
      "course": "Tecnologia da informação",
      "grade": "Graduação",
      "date": "Segunda-feira",
      "hour": "18:00 - 20:00",
      "students_id": [1, 2, 3, 5]
    },
    {
      "id": 5,
      "name": "Calculo II",
      "course": "Tecnologia da informação",
      "grade": "Graduação",
      "date": "Quinta-feira",
      "hour": "08:00 - 10:00",
      "students_id": [1, 2, 3, 4]
    },
    {
      "id": 6,
      "name": "Banco de dados",
      "course": "Tecnologia da informação",
      "grade": "Graduação",
      "date": "Sexta-feira",
      "hour": "13:00 - 15:00",
      "students_id": [2, 4, 5]
    }
  ]
};

export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_CLASS':
      return { ...state, turmas: [ ...state.turmas, action.payload]};
    
    default:
      return state;
  }
}