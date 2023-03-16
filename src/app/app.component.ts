import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Mini Calculadora :)';
  numero1: number = 0;
  numero2: number = 0;
  resultadoSuma: number = 0;
  resultadoResta: number = 0;
  resultadoMulti: number = 0;
  resultadoDiv: number = 0;

  sumar(): void {
    this.resultadoSuma = this.numero1 + this.numero2;
  }
  restar(): void {
    this.resultadoResta = this.numero1 - this.numero2;
  }
  multiplicar(): void {
    this.resultadoMulti = this.numero1 * this.numero2;
  }
  dividir(): void {
    this.resultadoDiv = this.numero1 / this.numero2;
  }
}
