class Person {
  constructor(config) {
    this.id = config.id;
    this.name = config.name;
    this.surname = config.surname;
    this.happiness = 50;
    this.alive=true;
    this.age = config.age;
    this.sex=config.sex;
    this.clothes = {
      pants: config.pants,
      shirt: config.shirt,
    }
    this.weapons={
      primary:null,
      secondary:null,
    }
    this.items=[];
  }

}
