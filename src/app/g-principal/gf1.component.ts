import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { GrafoService } from 'src/app/grafo.service';

@Component({
  selector: 'app-g-principal',
  templateUrl: './gf1.component.html',
  styleUrls: ['./gf1.component.css']
})

export class Gf1Component implements OnInit {
  constructor(private graf: GrafoService) { }

  cambiar(n: number){
    this.graf.changeGrafo(n);
  }

  ngOnInit() {
  }

}
