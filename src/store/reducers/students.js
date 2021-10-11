const INITIAL_STATE = {
  alunos: [
    {
      "id": 1,
      "name": "Pedro Henrique de Freitas Silva",
      "email": "delauraph@gmail.com",
      "course": "Engenharia de computação",
      "phone": "(84) 98137-7722",
      "registration": "202112384922",
      "entry_year": 2017,
      "period": 8,
      "gender":	"Masculino",
      "marital_status":	"Solteiro(a)",
      "birth_date":	"21/11/1998",
      "breed": "Branco",
      "nationality": "Brasileiro(a)",
      "image_url": ""
    },
    {
      "id": 2,
      "name": "Francisco Lucas Nascimento",
      "email": "xicolucas@gmail.com",
      "course": "Tecnologia da informação",
      "phone": "(84) 99999-9999",
      "registration": "202114354900",
      "entry_year": 2017,
      "period": 9,
      "gender":	"Masculino",
      "marital_status":	"Solteiro(a)",
      "birth_date":	"05/04/1998",
      "breed": "Pardo",
      "nationality": "Brasileiro(a)",
      "image_url": ""
    },
    {
      "id": 3,
      "name": "Pedro Henrique de Freitas Silva",
      "email": "delauraph@gmail.com",
      "course": "Engenharia de computação",
      "phone": "(84) 98137-7722",
      "registration": "202112384922",
      "entry_year": 2017,
      "period": 8,
      "gender":	"Masculino",
      "marital_status":	"Solteiro(a)",
      "birth_date":	"21/11/1998",
      "breed": "Branco",
      "nationality": "Brasileiro(a)",
      "image_url": ""
    },
    {
      "id": 4,
      "name": "Francisco Lucas Nascimento",
      "email": "xicolucas@gmail.com",
      "course": "Tecnologia da informação",
      "phone": "(84) 99999-9999",
      "registration": "202114354900",
      "entry_year": 2017,
      "period": 9,
      "gender":	"Masculino",
      "marital_status":	"Solteiro(a)",
      "birth_date":	"05/04/1998",
      "breed": "Pardo",
      "nationality": "Brasileiro(a)",
      "image_url": ""
    },
    {
      "id": 5,
      "name": "Pedro Henrique de Freitas Silva",
      "email": "delauraph@gmail.com",
      "course": "Engenharia de computação",
      "phone": "(84) 98137-7722",
      "registration": "202112384922",
      "entry_year": 2017,
      "period": 8,
      "gender":	"Masculino",
      "marital_status":	"Solteiro(a)",
      "birth_date":	"21/11/1998",
      "breed": "Branco",
      "nationality": "Brasileiro(a)",
      "image_url": ""
    },
    {
      "id": 6,
      "name": "Francisco Lucas Nascimento",
      "email": "xicolucas@gmail.com",
      "course": "Tecnologia da informação",
      "phone": "(84) 99999-9999",
      "registration": "202114354900",
      "entry_year": 2017,
      "period": 9,
      "gender":	"Masculino",
      "marital_status":	"Solteiro(a)",
      "birth_date":	"05/04/1998",
      "breed": "Pardo",
      "nationality": "Brasileiro(a)",
      "image_url": ""
    }
  ]
};

export default function handleStudent(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_STUDENT':
      return { ...state, alunos: [ ...state.alunos, action.payload]};
    
    default:
      return state;
  }
}