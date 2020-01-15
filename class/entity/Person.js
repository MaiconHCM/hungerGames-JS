class Person {
  constructor(config) {
    this.id = config.id;
    this.name = config.name;
    this.surname = config.surname;
    this.happiness = 50;
    this.alive = true;
    this.age = config.age;
    this.sex = config.sex;
    this.clothes = {
      pants: config.pants,
      shirt: config.shirt,
    }
    this.weapons = [];
    this.items = [];
  }
  atack(target) {
    for (let index = 0; index < this.weapons.length; index--) {
      this.weapons[index].use(target);
    }

  }

}
