import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from './title/title';

@Component({
  imports: [RouterOutlet, Title],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('life-cicle');
}
