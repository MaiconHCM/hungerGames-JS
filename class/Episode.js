class Episode {
  constructor(scenario) {
    this.scenario = scenario;
    this.events = [];
    this.passPersons = [];
    this.turnPersons = this.scenario.personsCollection.getAliveList().length;

    this.actPersons();

    return this.scenario;
  }

  actPersons() {
    let array = this.shuffle(this.scenario.personsCollection.getAliveList());
    for (let index = 0; index < array.length; index++) {
      if (!this.passPersons.includes(array[index].id)) {
        this.passPersons.push(array[index].id);
        this.randomEvent(array[index].id);
      }
    }
  }

  randomEvent(id) {
    let protagonist = this.scenario.personsCollection.getById(id);
    
    //Lista de eventos que podem ocorrer, cada evento possui duas funções:
    //1-execute, Execução do evento, o que ocorre quando aquele evento ser executado.
    //2-probability, Probalidade do evento, de acordo ao jogador, qual chance desse evento ocorrer. 
    let event = [
      {
        execute: function (origin) {
          app.echo(protagonist.name + ' foi abduzido por um alienigena.');
          origin.scenario.personsCollection.kill(protagonist.id);
        },
        probability: function (origin) {
          return 1;
        }
      },
      {
        execute: function (origin) {
          app.echo(protagonist.name + ' caiu em um buraco.');
          origin.scenario.personsCollection.kill(protagonist.id);
        },
        probability: function (origin) {
          return 5;
        }
      },
    ]

    //Total de Range
    let totalRange = 0;
    //Lista de probalidades
    let probabilityList = [];

    //Preenche probalidades dos eventos
    for (let index = 0; index < event.length; index++) {
      let probability = event[index].probability(this);

      //Se a probalidade for maior que 0, adicionar na lista
      if (probability > 0) {
        totalRange += probability;

        probabilityList.push({
          range: totalRange,
          execute: event[index].execute
        })

      }

    }

    //Escolhe aleatoriamente um range no qual vai ser escolhido a probalidade
    let random = this.getRandomInt(1, totalRange);

    //Faz while na Lista de probalidades, para encontrar o devido evento
    let index = 0;
    while (probabilityList[index]['range'] <= random) {
      index++;
    };
    probabilityList[index].execute(this);

  }

  //Gera aleatoriamente um inteiro dentro de um Range
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  //Funcão utlizado para obter uma pessoa aletoria que não tenha seu turno passado
  getRandomPerson() {
    let array = this.shuffle(this.scenario.personsCollection.getAliveList());
    for (let index = 0; index < array.length; index++) {
      if (!this.passPersons.includes(array[index].id)) {
        this.passPersons.push(array[index].id);
        return array[index];
      }
    }
  }

  //Pessoas com turnos restantes
  turnRemains() {
    return this.turnPersons - this.passPersons.length;
  }
  shuffle(array) {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }

}