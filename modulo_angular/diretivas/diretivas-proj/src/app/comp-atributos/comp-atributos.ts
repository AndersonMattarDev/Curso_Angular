import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  selector: 'app-comp-atributos',
  styleUrl: './comp-atributos.css',
  templateUrl: './comp-atributos.html',
})
export class CompAtributos {
  estilo: string = 'disable';
  constructor() {}

  ngOnInit() {}

  trocar() {
    if (this.estilo === 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }
}
