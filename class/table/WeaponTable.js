class WeaponTable {
  constructor() {
    this.weapons = [];
    this.create();
  }
  getById(id) {
    return this.weapons.find(x => x.id === id);
  }
  getList() {
    return this.weapons;
  }
  add(array) {
    for (let index = 0; index < array.length; index++) {
      array[index].id = this.weapons.length;
      this.weapons.push(new Weapon(array[index]));
      console.log('Arma adicionada:' + JSON.stringify(array[index]));
    }
  }
  update(array) {
    for (let index = 0; index < array.length; index++) {
      id = array[index].id;
      this.weapons[id] = array[index];
      console.log('Arma editada:' + JSON.stringify(array[index]));
    }
  }
  create(){
    let array=[
      {
        name : 'faca',
        damage : 2,
        durability : 15,
        weight :0.2,
      },
      {
        name : 'faca grande',
        damage : 4,
        durability : 20,
        weight :0.3,
      },
      {
        name : 'katana',
        damage : 6,
        durability : 25,
        weight :0.6,
      },
      {
        name : 'Espada',
        damage : 6,
        durability : 20,
        weight :0.8,
      },
      {
        name : 'Pistola',
        damage : 10,
        durability : 5,
        weight :0.4,
      },
      {
        name : 'Metralhadora',
        damage : 15,
        durability : 5,
        weight :1,
      },
      {
        name : 'Pinto de Borracha',
        damage : 1,
        durability : 100,
        weight :0.1,
      },
      {
        name : 'Barbeador',
        damage : 1,
        durability : 1,
        weight :0.1,
      },


    ]
    this.add(array);
  }
}  