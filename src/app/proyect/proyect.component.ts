import { Component, OnInit, Input } from '@angular/core';
import { proyecto } from '../proyecto'; 

@Component({
  selector: 'app-proyect',
  templateUrl: './proyect.component.html',
  styleUrls: ['./proyect.component.css']
})
export class ProyectComponent implements OnInit {
  
  @Input() proyecto: proyecto;

  constructor() { }

  ngOnInit() {
  }

}
