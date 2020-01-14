class EventCollection {
  constructor() {
    this.events = [];
  }
  getById(id) {
    return  this.events.find(x => x.id === id);
  }
  getList() {
    return this.events;
  }

  add(array) {
    for (let index = 0; index < array.length; index++) {

      array[index].id=this.events.length;
      event=new Event(array[index]);

      this.events.push(event);
      console.log('Pessoa adicionada:'+JSON.stringify(array[index]));
    }
  }
  generateEvents(){
    let array=[
      new Event({
        execute:function(){

        },
        probability:function(){
          
        }
      }),
    ]

  }
}