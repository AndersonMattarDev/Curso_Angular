import {
	Component,
	OnInit,
	OnChanges,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy
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
AfterViewInit,
OnDestroy
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

	//Após alguma alteração verifica o conteúdo
	ngAfterContentChecked(): void {
		console.log("ngAfterContentChecked");
	}

	//Após alguma alteração verifica a view
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

	ngOnDestroy(): void {
		console.log("Goodby my friend!");
	}
}
