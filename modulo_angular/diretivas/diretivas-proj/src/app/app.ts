import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from './card/card';
import { CompAtributos } from './comp-atributos/comp-atributos';

@Component({
  imports: [RouterOutlet, Card, CompAtributos],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('diretivas-proj');
  protected isAliveCard = signal(true);
}
