import { Component, OnInit } from '@angular/core';
import { Competencia } from './competencia';

@Component({
  selector: 'app-competencias',
  templateUrl: './competencias.page.html',
  styleUrls: ['./competencias.page.scss'],
})

export class CompetenciasPage {

  c1 = new Competencia('Noções Espaciais e Orientação no Plano Cartesiano', 'Guie o robô Wally pelo plano cartesiano e desenvolva sua capacidade de orientação espacial!');
  c2 = new Competencia('Variáveis', 'Fulano, ciclano ou beltrano...? Chegou a hora de generalizar! Domine variáveis, conceito essencial na programação.');
  c3 = new Competencia('Condições', 'Assim ou assado...? Certo ou errado...? Difícil dizer uma única resposta... porque tudo depende da ocasião!');
  c4 = new Competencia('Conceitos Matemáticos Básicos e Operadores', 'Chegou a hora daquele reforço em matemática... ciência que anda lado a lado com todas as outras.');
  c5 = new Competencia('Matemática Financeira Básica', "Sempre se confundia nas aulas de porcentagem e juros? Esta competência foi feita para você!");
  c6 = new Competencia('Repetições ou Loops', 'Esteja em um loop infinito de aprendizagem... aprenda mais sobre as repetições, também conhecidas como loopings.');
  c7 = new Competencia('Associando Condições e Repetições', 'Não pare de estudar... se não o diploma não sai! Aprenda a associar repetições com condições.');
  c8 = new Competencia('Repetições ou Loops II', 'Aprofunde-se ainda mais nas repetições associadas às condições.');
  c9 = new Competencia('Trabalhando com Tabelas (Arrays e Matrizes)', 'Para organizar os dados, às vezes usamos tabelas. Na programação não é diferente. Aprenda mais sobre arrays e matrizes!');
  c10 = new Competencia('Pilhas e Filas', 'Empilhar e enfileirar objetos na vida real é uma forma útil de organizar coisas... será que na programação isso também acontece?');
  zonaNerd = new Competencia('ZONA NERD', 'Competência criada para dar pontos extras, e em troca se aprofundar e adquirir ainda mais conhecimento! Aventure-se!');

  competencias = [this.c1, this.c2, this.c3, this.c4, this.c5, this.c6, this.c7, this.c8, this.c9, this.c10, this.zonaNerd];


  constructor() { }


  adicionarCompetencia() {
    console.log('Competência cadastrada com sucesso!')
  }

  removerCompetencia() {

  }

}
