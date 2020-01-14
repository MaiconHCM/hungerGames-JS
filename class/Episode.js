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
    let principal = this.scenario.personsCollection.getById(id);
    let event = [
      {
        execute: function () {
          app.echo(principal.name + ' foi abduzido por um alienigena.');
          this.scenario.personsCollection.kill(principal.id);
        },
        probability: function () {
          return 1;
        }
      },
      {
        execute: function () {
          app.echo(principal.name + ' caiu em um buraco.');
          this.scenario.personsCollection.kill(principal.id);
        },
        probability: function () {
          return 5;
        }
      },
    ]

    let total = 0;
    let probabilityTotal = [];
    for (let index = 0; index < event.length; index++) {
      let probability = event[index].probability();

      if (probability > 0) {
        total += probability;
        probabilityTotal.push({
          range: total,
          execute: event[index].execute
        })
      }
    }
    let random = this.getRandomInt(0, total);
    let index = 0;
    while (probabilityTotal[index].range <= random) {
      index++;
    };
    probabilityTotal[index] = probabilityTotal[index - 1].execute();

  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  getRandomPerson() {
    let array = this.shuffle(this.scenario.personsCollection.getAliveList());
    for (let index = 0; index < array.length; index++) {
      if (!this.passPersons.includes(array[index].id)) {
        this.passPersons.push(array[index].id);
        return array[index];
      }
    }
  }
  passRemains() {
    return this.turnPersons - this.passPersons.length;
  }
  shuffle(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }

}
