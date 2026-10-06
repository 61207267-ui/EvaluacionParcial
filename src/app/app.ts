import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Docentes } from './components/docentes/docentes';
import { Cursos } from './components/cursos/cursos';
import { Testimonios } from './components/testimonios/testimonios';
import { ValorAgregado } from './components/valor-agregado/valor-agregado';

@Component({
  imports: [RouterOutlet, Docentes, Cursos, Testimonios,ValorAgregado],
import { Header } from './components/header/header';
import { Informacion } from './components/informacion/informacion';
import { Idiomas } from './components/idiomas/idiomas';

@Component({
  imports: [Header, Informacion, Idiomas],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('EvaluacionParcial');
}
