import { Component, OnInit } from '@angular/core';
import { GrafoService } from 'src/app/grafo.service';

@Component({
  selector: 'app-grafos',
  templateUrl: './grafos.component.html',
  styleUrls: ['./grafos.component.css']
})
export class GrafosComponent implements OnInit {

  
  constructor(private grafo: GrafoService){
  }

  getGrafo(){
    return this.grafo.getGrafo();
  }
  
  ngOnInit() {
  }

}
