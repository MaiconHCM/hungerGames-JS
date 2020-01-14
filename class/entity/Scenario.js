class Scenario {
  constructor(config) {
    this.name = config.name;
    this.personsCollection = new PersonCollection();
    
    console.log('Creating Scenario:' + JSON.stringify(config));
  }
}




