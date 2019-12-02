import { Component, OnInit, Input } from '@angular/core';
import { persona } from '../persona';

@Component({
  selector: 'app-integrante',
  templateUrl: './integrante.component.html',
  styleUrls: ['./integrante.component.css']
})
export class IntegranteComponent implements OnInit {

  @Input() person: persona;

  constructor() { }

  ngOnInit() {
  }

}
