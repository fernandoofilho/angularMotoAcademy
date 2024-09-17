import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-aluno',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aluno.component.html',
  styleUrl: './aluno.component.css'
})
export class AlunoComponent {
 alunos = [
  {
    index: 1,
    nome: "Fernando",
    idade: 23,
    sexo: 'M',
    cep: '69054332'
  },
  {
    index: 2,
    nome: "Ana",
    idade: 22,
    sexo: 'F',
    cep: '12345678'
  },
  {
    index: 3,

    nome: "Carlos",
    idade: 24,
    sexo: 'M',
    cep: '23456789'
  },
  {
        index: 4,

    nome: "Beatriz",
    idade: 21,
    sexo: 'F',
    cep: '34567890'
  },
  {
        index: 5,

    nome: "Juliana",
    idade: 25,
    sexo: 'F',
    cep: '45678901'
  },
  {
        index: 6,

    nome: "Ricardo",
    idade: 22,
    sexo: 'M',
    cep: '56789012'
  },
  {
    index: 7,
    nome: "Paula",
    idade: 23,
    sexo: 'F',
    cep: '67890123'
  },
  {
    index: 8,
    nome: "Marcos",
    idade: 26,
    sexo: 'M',
    cep: '78901234'
  },
  {
    index: 9,
    nome: "Larissa",
    idade: 20,
    sexo: 'F',
    cep: '89012345'
  },
  {
    index: 10,
    nome: "Rodrigo",
    idade: 27,
    sexo: 'M',
    cep: '90123456'
  },
  {
    index: 11,
    nome: "Camila",
    idade: 24,
    sexo: 'F',
    cep: '01234567'
  }
];
}
