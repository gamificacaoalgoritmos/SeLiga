import { MedalhaInterface } from '../interfaces/medalha';
import { MedalhaService } from '../services/medalha.service';

export class Medalha {
    codigo: string;
    nome: string;
    descricao: string;
    imagem: string;
    condicao: boolean;
    medalhaService: MedalhaService;
    medalha: MedalhaInterface;

    constructor(medalha?) {
        if(medalha) {
            this.codigo = medalha.codigo;
            this.nome = medalha.nome;
            this.descricao = medalha.descricao;
            this.imagem = medalha.imagem;
            this.condicao = medalha.condicao;
            this.medalha = medalha;
        }

        this.medalhaService = new MedalhaService();
        
    }

    addMedalha(){
        this.medalhaService.addMedalha(this.medalha);
    }

    getMedalha(codigo: string){
        return this.getMedalha(codigo);
    }

    getMedalhas(){
        return this.getMedalhas();
    }
}