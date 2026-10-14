import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgClass, NgStyle, FormsModule],
  selector: 'app-comp-atributos',
  styleUrl: './comp-atributos.css',
  templateUrl: './comp-atributos.html',
})
export class CompAtributos {
  estilo: string = 'disable';
  corFundo: string = 'red';
  corFonte: string = 'white';
  item: string = '';
  lista: string[] = [];
  isEnableBlock: boolean = true;

  constructor() {}

  ngOnInit() {}

  adicionarLista() {
    this.lista.push(this.item);
  }

  trocar() {
    if (this.estilo === 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }
}
