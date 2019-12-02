import { Component, OnInit } from '@angular/core';
import { GrafoService } from 'src/app/grafo.service';

@Component({
  selector: 'app-g-integrantes',
  templateUrl: './g-integrantes.component.html',
  styleUrls: ['./g-integrantes.component.css']
})
export class GIntegrantesComponent implements OnInit {
  constructor(private graf: GrafoService) { }

  cambiar(n: number){
    this.graf.changeGrafo(n);
  }

  estudiante(n: number){
    this.graf.cambiarIntegrante(n);
  }

  ngOnInit() {
  }

}
