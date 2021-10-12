const INITIAL_STATE = {
  "alunos": [
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
      "breed": "Branco(a)",
      "nationality": "Brasileiro(a)",
      "image_url": "https://avatars.githubusercontent.com/u/39572742?v=4"
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
      "breed": "Pardo(a)",
      "nationality": "Brasileiro(a)",
      "image_url": ""
    },
    {
      "id": 3,
      "name": "Emanoel souza",
      "email": "emsouze@gmail.com",
      "course": "Engenharia de produção",
      "phone": "(84) 98123-7124",
      "registration": "202112381122",
      "entry_year": 2018,
      "period": 7,
      "gender":	"Masculino",
      "marital_status":	"Solteiro(a)",
      "birth_date":	"12/10/1999",
      "breed": "Branco(a)",
      "nationality": "Brasileiro(a)",
      "image_url": ""
    },
    {
      "id": 4,
      "name": "Felipe Amorim Bezerra",
      "email": "felbez@gmail.com",
      "course": "Tecnologia da informação",
      "phone": "(84) 99291-8990",
      "registration": "202014457801",
      "entry_year": 2018,
      "period": 8,
      "gender":	"Masculino",
      "marital_status":	"Solteiro(a)",
      "birth_date":	"05/04/1998",
      "breed": "Preto(a)",
      "nationality": "Brasileiro(a)",
      "image_url": ""
    },
    {
      "id": 5,
      "name": "Inacio Silva Lopes",
      "email": "inaciosilvalopes@gmail.com",
      "course": "Engenharia de computação",
      "phone": "(84) 99136-6621",
      "registration": "202012834922",
      "entry_year": 2019,
      "period": 5,
      "gender":	"Masculino",
      "marital_status":	"Solteiro(a)",
      "birth_date":	"04/02/1999",
      "breed": "Branco(a)",
      "nationality": "Brasileiro(a)",
      "image_url": ""
    },
    {
      "id": 6,
      "name": "Natanael Oliveira Filho",
      "email": "NatanFilho@gmail.com",
      "course": "Tecnologia da informação",
      "phone": "(84) 98181-2222",
      "registration": "201902354922",
      "entry_year": 2020,
      "period": 4,
      "gender":	"Masculino",
      "marital_status":	"Solteiro(a)",
      "birth_date":	"02/01/2000",
      "breed": "Pardo(a)",
      "nationality": "Brasileiro(a)",
      "image_url": ""
    }
  ],
};

export default function handleStudent(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_STUDENT':
      return { ...state, alunos: [ ...state.alunos, action.payload]};
    
    default:
      return state;
  }
}