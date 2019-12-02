import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class GrafoService {
  private grafo = 1;
  private evento = 1;
  private proyectos = 1;
  private integrante = 1;

  constructor() { }

  getGrafo(){
    return this.grafo;
  }

  changeGrafo(numb: number){
    this.grafo = numb;
  }

  getEvento(){
    return this.evento;
  }

  cambiarEvento(numb: number){
      this.evento = numb;
  }

  getProyecto(){
    return this.proyectos;
  }

  cambiarproyecto(numb: number){
      this.proyectos = numb;
  }

  getIntegrante(){
    return this.integrante;
  }
  
  cambiarIntegrante(numb: number){
    this.integrante = numb;
  }
  
}
