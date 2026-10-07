import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from './title/title';
import { CheckSample } from './check-sample/check-sample';

@Component({
  imports: [RouterOutlet, Title, CheckSample],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('life-cicle');
	private isAliveCheckSample = Boolean(true);

	disposeCheckSample() {
		this.isAliveCheckSample = false;
	}
}
