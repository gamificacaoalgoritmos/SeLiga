import { Component, OnInit } from '@angular/core';
import { Modalidade } from '../../model/modalidade';

@Component({
  selector: 'app-modalidade',
  templateUrl: './modalidade.page.html',
  styleUrls: ['./modalidade.page.scss'],
})
export class ModalidadePage implements OnInit {
  dados = {}

  constructor() { }

  ngOnInit() {
  }

  submitForm(dados) {
    var modalidade = new Modalidade(dados);
    modalidade.addModalidade();
    alert('Adicionado com sucesso')
  }

}
