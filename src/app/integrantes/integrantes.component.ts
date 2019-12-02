import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { persona } from 'src/app/persona';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent implements OnInit {
  private integrantes: persona[];
  
  constructor(private data: DataService) {
    this.data.getIntegrantes().subscribe(p =>{
        this.integrantes = p;
    });
  }


  ngOnInit() {
  }

}
