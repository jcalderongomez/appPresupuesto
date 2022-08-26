import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  @Input() presupuestoTotal: number = 10000;
  @Input() ingresoTotal: number = 50000;
  @Input() egresoTotal: number= 5000;
  @Input() porcentajeTotal: number= 20000;

  constructor() { }

  ngOnInit(): void {
  }

}
