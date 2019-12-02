import { Component, OnInit } from '@angular/core';
import { GrafoService } from 'src/app/grafo.service';

@Component({
  selector: 'app-g-proyectos',
  templateUrl: './g-proyectos.component.html',
  styleUrls: ['./g-proyectos.component.css']
})
export class GProyectosComponent implements OnInit {
  constructor(private graf: GrafoService) { }

  cambiar(n: number){
    this.graf.changeGrafo(n);
  }

  cambiarProyecto(n: number){
    this.graf.cambiarproyecto(n);
  }

  ngOnInit() {
  }

}
