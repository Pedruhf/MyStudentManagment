const INITIAL_STATE = {
  turmas: [
    {
      "id": 1,
      "name": "Desenvolvimento web",
      "course": "Tecnologia da informação",
      "grade": "Graduação",
      "date": "Segunda-feira",
      "hour": "10:00 - 12:00",
      "students": [
        {
          "id": 2,
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
          "id": 5,
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
      ]
    },
    {
      "id": 2,
      "name": "Calculo I",
      "course": "Tecnologia da informação",
      "grade": "Graduação",
      "date": "Quarta-feira",
      "hour": "08:00 - 10:00",
      "students": [
        {
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
      ]
    },
    {
      "id": 3,
      "name": "Álgebra linear",
      "course": "Tecnologia da informação",
      "grade": "Graduação",
      "date": "Sexta-feira",
      "hour": "14:00 - 16:00",
      "students": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
        }
      ]
    },
    {
      "id": 4,
      "name": "Internet das coisas",
      "course": "Tecnologia da informação",
      "grade": "Graduação",
      "date": "Segunda-feira",
      "hour": "18:00 - 20:00",
      "students": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
      ]
    },
    {
      "id": 5,
      "name": "Calculo II",
      "course": "Tecnologia da informação",
      "grade": "Graduação",
      "date": "Quinta-feira",
      "hour": "08:00 - 10:00",
      "students": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
          "id": 5,
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
      ]
    },
    {
      "id": 6,
      "name": "Banco de dados",
      "course": "Tecnologia da informação",
      "grade": "Graduação",
      "date": "Sexta-feira",
      "hour": "13:00 - 15:00",
      "students": [
        {
          "id": 1,
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
          "id": 2,
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
          "id": 3,
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
          "id": 4,
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
      ]
    }
  ]
};

export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_CLASS':
      return { ...state, turmas: [ ...state.turmas, action.payload]};

    case 'ADD_STUDENT_TO_CLASS': {
      const classIndex = state.turmas.findIndex(classe => classe.name === action.payload.class);
      state.turmas[classIndex].students.push(action.payload);
      return {...state};
    }
    
    default:
      return state;
  }
}