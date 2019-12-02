import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { profe } from 'src/app/profe';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  private profesores: profe[];

  constructor(private data: DataService) {
    this.data.getDocente().subscribe(p =>{
        this.profesores = p;
    });
  }

  ngOnInit() {
  }

}
