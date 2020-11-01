import { Component, OnInit } from '@angular/core';
import { MedalhaInterface } from 'src/app/interfaces/medalha';
import { Medalha } from 'src/app/model/medalha';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-medalha',
  templateUrl: './medalha.page.html',
  styleUrls: ['./medalha.page.scss'],
})
export class MedalhaPage implements OnInit {

  dados = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submitForm(dados: MedalhaInterface) {
    var medalha = new Medalha(dados);
    medalha.addMedalha()
    alert('adicionado com sucesso')

    for(let item in medalha) {
      if(item[0] != "a" && item[0] != "g" && item[0] != "m") {
        dados[item] = ""
      }
    }
 
    
  }

}
