
app = new class App {
  constructor() {
    this.weaponBase=new WeaponTable();
    this.scenario = new Scenario({
      name:'Cenario'
    });
    let persons = [];
    persons.push({
      name: 'Maicon',
      surname: 'Machado',
      age: 20,
      pants: 'Normal',
      shirt: 'Normal',
      sex: 'M'
    })
    persons.push({
      name: 'Cristiana',
      surname: 'Lopes',
      age: 18,
      pants: 'Normal',
      shirt: 'Normal',
      sex: 'F'
    });
    this.scenario.personsCollection.add(persons);
  }

  next() {
    let episode = new Episode(this.scenario);
  }
  newPerson() {
    this.planeta.addPerson(pessoa);
    this.planeta.addPerson(pessoa1);
    console.log(this.planeta.getPerson());
  }
  echo(texto){
    let p=document.createElement('p');
    p.innerHTML=texto;
    document.getElementById("narracao").appendChild(p);
  }

}