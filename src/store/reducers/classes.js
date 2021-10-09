const INITIAL_STATE = {
  turmas: [
    {
      "id": 1,
      "name": "Desenvolvimento web",
      "course": "Tecnologia da informação",
      "grade": "Graduação",
      "date": "Segunda-feira",
      "hour": "10:00 - 12:00" 
    },
    {
      "id": 2,
      "name": "Calculo I",
      "course": "Tecnologia da informação",
      "grade": "Graduação",
      "date": "Quarta-feira",
      "hour": "08:00 - 10:00" 
    },
    {
      "id": 3,
      "name": "Álgebra Linear",
      "course": "Tecnologia da informação",
      "grade": "Graduação",
      "date": "Sexta-feira",
      "hour": "14:00 - 16:00" 
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