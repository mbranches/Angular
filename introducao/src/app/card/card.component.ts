import { Component } from '@angular/core';

interface IPlano {
  info: IInfo;
}

interface IInfo {
  nome: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  plano: IPlano = {
    info: {
      nome: 'Simples',
      preco: 100
    }
  }
}
