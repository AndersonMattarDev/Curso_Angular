import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  produtos: string[] = [];
  menuType = 'admin';

  constructor() {
    this.produtos = [
      'Mouse',
      'Teclado',
      'Monitor',
      'Gabinete',
      'Placa de Vídeo',
      'Placa Mãe',
      'Processador',
      'Memória RAM',
      'SSD',
      'HD',
    ];
  }

  ngOnInit(): void {}

  adicionar() {
    this.produtos.push('Anderson');
  }
  remover(index: number) {
    this.produtos.splice(index, 1);
  }
}
