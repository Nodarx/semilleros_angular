import { Component, OnInit } from '@angular/core';
import { GrafoService } from 'src/app/grafo.service';

@Component({
  selector: 'app-g-objetivos',
  templateUrl: './g-objetivos.component.html',
  styleUrls: ['./g-objetivos.component.css']
})
export class GObjetivosComponent implements OnInit {
  constructor(private graf: GrafoService) { }

  cambiar(n: number){
    this.graf.changeGrafo(n);
  }
  
  ngOnInit() {
  }

}
