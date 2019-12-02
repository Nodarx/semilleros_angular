import { Component, OnInit } from '@angular/core';
import { GrafoService } from 'src/app/grafo.service';

@Component({
  selector: 'app-g-publicaciones',
  templateUrl: './g-publicaciones.component.html',
  styleUrls: ['./g-publicaciones.component.css']
})
export class GPublicacionesComponent implements OnInit {
  constructor(private graf: GrafoService) { }

  cambiar(n: number){
    this.graf.changeGrafo(n);
  }
  
  ngOnInit() {
  }

}
