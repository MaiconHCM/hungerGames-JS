class Event {
  constructor(config) {
    this.execute = config.execute;
    this.probability = config.probability;
    console.log('Creating Event:' + JSON.stringify(config));
  }
}




