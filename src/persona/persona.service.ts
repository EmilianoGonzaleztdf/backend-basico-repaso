import { Injectable } from '@nestjs/common';

@Injectable()
export class PersonaService {

  personas = [
    {id: 0 , nombre:"leandro" , apellido:"dini" , dni:1234 , edad: 34, rol : "docente"},
    {id: 1 , nombre:"sergio" , apellido:"garcia", dni:1234 , edad: 35,  rol : "docente"},
    {id: 2 , nombre:"juan" , apellido:"gelos", dni:1234 ,  edad: 45, rol : "docente"},
    {id: 3 , nombre:"jose" , apellido:"Benitez", dni:1234 ,  edad: 33, rol : "tutor"}
  ];

  public getPersonas(): any {
    return this.personas;
  }

  public getEliminarPersona(id: number): any {
    let personaExiste = false;
    let posicionPersona = 0;
    for (let i = 0; i < this.personas.length; i++){
      if (id == this.personas[i].id){
        personaExiste = true;
        posicionPersona = i;
      }
    } if (personaExiste){
      this.personas.splice(posicionPersona, 1);
      return{
        "msj":` persona ${id} eliminada`,
        "persona": this.personas[posicionPersona]
      }
    } else{
      return{"msj":`persona ${id} no encontrada`};
    }
  }

  public getCrearPersona(body):string{
      this.personas.push(body);
      return `se creo la persona: ${body.nombre} ${body.apellido}`
  }

  public getPersonasById(id: number): any {
    let persona  = this.personas.find(p => p.id === id);
    let personasAux = [];
    personasAux.push(persona)
    return persona;
  }
}
