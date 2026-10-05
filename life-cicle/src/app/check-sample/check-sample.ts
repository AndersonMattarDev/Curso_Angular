import {
	Component,
	OnInit,
	OnChanges,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
} from '@angular/core';

@Component({
	imports: [],
	selector: 'app-check-sample',
	styleUrl: './check-sample.css',
	templateUrl: './check-sample.html',
})
export class CheckSample implements
OnInit,
OnChanges,
DoCheck,
AfterContentChecked,
AfterContentInit,
AfterViewChecked,
AfterViewInit
{

	quantidade: number = 0;

	constructor() {}

	adicionar() {
		this.quantidade++;
	}

	decrementar() {
		this.quantidade--;
	}

	//checked --> Content --> view


	//Quando o primeiro conteudo é iniciado
	ngAfterContentInit(): void {
		console.log("ngAfterContentInit");
	}

	//Depois da inicialização da view
	ngAfterViewInit(): void {
		console.log("ngAfterViewInit");
	}

	//Após alguma alteração no conteudo ou na view
	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked");
	}

	ngAfterViewChecked(): void {
		console.log("ngAfterViewChecked");
	}

	ngDoCheck(): void {
		console.log("ngDoCheck");
	}

	ngOnInit(): void {
		console.log("ngOnInit");
	}
	ngOnChanges(): void {
		console.log("ngOnChanges");
	}




}
