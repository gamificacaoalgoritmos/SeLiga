import { Component, OnInit } from '@angular/core';
import { Problema } from 'src/app/interfaces/problema';
import { ProblemaService } from 'src/app/services/problemas.service';


@Component({
  selector: 'app-problemas',
  templateUrl: './problemas.page.html',
  styleUrls: ['./problemas.page.scss'],
})
export class ProblemaPage implements OnInit {
  dados = {}
  constructor(private problemaService: ProblemaService) { }

  ngOnInit() {
  }

  submitForm(dados: Problema) {
    this.problemaService.addProblema(dados)
    alert('adicionado com sucesso')
  }

}
