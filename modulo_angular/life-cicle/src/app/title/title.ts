import { Input, Component, OnChanges, OnInit } from '@angular/core';

@Component({
	imports: [],
	selector: 'app-title',
	styleUrl: './title.css',
	templateUrl: './title.html',
})
export class Title implements OnInit, OnChanges {
	@Input() nome: string = '';

	constructor(){
		console.log(`Construtor: ${this.nome}`);
	}
	ngOnChanges(): void {
		console.log(`OnChanges: ${this.nome}`);
	}
	ngOnInit(): void {
		this.nome = this.nome + " (inicializado)";
		console.log(`OnInit: ${this.nome}`);
	}
}
