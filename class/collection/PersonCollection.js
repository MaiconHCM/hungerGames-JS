class PersonCollection {
  constructor() {
    this.persons = [];
  }
  getById(id) {
    return  this.persons.find(x => x.id === id);
  }
  getList() {
    return this.persons;
  }
  getAliveList() {
    return this.persons.filter(x => x.alive === true);
  }

  add(array) {
    for (let index = 0; index < array.length; index++) {
      array[index].id=this.persons.length;

      this.persons.push(new Person(array[index]));
      console.log('Pessoa adicionada:'+JSON.stringify(array[index]));
    }
  }
  update(array){
    for (let index = 0; index < array.length; index++) {
      let id=array[index].id;

      this.persons[id]=array[index];
      console.log('Pessoa editada:'+JSON.stringify(array[index]));
    }
  }
  kill(id){
    this.persons[id].alive=false;
    console.log(this.persons[id].name+' morreu');
  }
  revive(id){
    this.persons[id].alive=true;
  }

}