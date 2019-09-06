import { Component, OnInit } from '@angular/core';
import { ModalidadeService } from 'src/app/services/modalidade.service';

@Component({
  selector: 'app-modalidade',
  templateUrl: './modalidade.page.html',
  styleUrls: ['./modalidade.page.scss'],
})
export class ModalidadePage implements OnInit {
  dados = {}

  constructor(private modalidadeService: ModalidadeService) { }

  ngOnInit() {
  }

  submitForm(dados) {
    this.modalidadeService.addModalidade(dados)
    alert('Adicionado com sucesso')
  }

}
