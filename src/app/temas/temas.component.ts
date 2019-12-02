import { Component, OnInit } from '@angular/core';
import { GrafoService } from 'src/app/grafo.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {
  constructor(private graf: GrafoService) { }

  cambiar(n: number){
    this.graf.changeGrafo(n);
  }

  ngOnInit() {
  }

}
