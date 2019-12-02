import { Component, OnInit, Input } from '@angular/core';
import { profe } from '../profe';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {

  @Input() profesor: profe;
  
  constructor() { }

  ngOnInit() {
  }

}
