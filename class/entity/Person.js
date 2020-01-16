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
  addWeapon(array) {
    for (let index = 0; index < array.length; index++) {
      let weapon = new Weapon(array[index]);
      weapon.id = this.weapons.length;
      this.weapons.push(weapon);
      console.log('Arma adicionada:' + JSON.stringify(array[index]));
    }
  }

  atack(target) {
    alert(JSON.stringify(this.weapons));
    for (let index = 0; index < this.weapons.length; index--) {
      this.weapons[index].use(target);
    }
  }

  kill() {
    this.alive = false;
    console.log(this.name + ' morreu');
  }
  revive() {
    this.alive = true;
    console.log(this.name + ' Reviveu');
  }

}
