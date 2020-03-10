import { Component, OnInit } from '@angular/core';
import { ProblemaInterface } from 'src/app/interfaces/problema';
import { Problema  } from '../../model/problema';


@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.page.html',
  styleUrls: ['./problemas.page.scss'],
})
export class ProblemaPage implements OnInit {
  dados = {}
  constructor() { }

  ngOnInit() {
  }

  submitForm(dados: ProblemaInterface) {
    var problema = new Problema(dados);
    problema.addProblema();
    alert('adicionado com sucesso')
  }
}
