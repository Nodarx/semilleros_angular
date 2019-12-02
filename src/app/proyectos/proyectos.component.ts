import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { proyecto } from '../proyecto'; 

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  private proyectos: proyecto[];

  constructor(private data: DataService) { 
    this.data.getProyectos().subscribe(p=>{
      this.proyectos = p;
    })
  }

  ngOnInit() {
  }

}
