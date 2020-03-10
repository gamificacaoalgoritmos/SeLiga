import { ProblemaInterface } from '../interfaces/problema';
import { ProblemaService } from '../services/problemas.service';

export class Problema {
    codigo: string
    titulo: string
    enunciado: string
    dica: string
    imagemCodigo: string
    imagem: string
    pontuacao: number
    dificuldade: number
    alternativaA: string
    alternativaB: string
    alternativaC: string
    alternativaD: string
    alternativaCorreta: string
    problema: ProblemaInterface;
    problemaService: ProblemaService;

    constructor(problema?: ProblemaInterface){
        if(problema) {
            this.codigo=problema.codigo;
            this.titulo=problema.titulo;
            this.enunciado=problema.enunciado;
            this.dica=problema.dica;
            this.imagemCodigo=problema.imagemCodigo;
            this.imagem=problema.imagem;
            this.pontuacao=problema.pontuacao;
            this.dificuldade=problema.dificuldade;
            this.alternativaA=problema.alternativaA;
            this.alternativaB=problema.alternativaB;
            this.alternativaC=problema.alternativaC;
            this.alternativaD=problema.alternativaD;
            this.alternativaCorreta=problema.alternativaCorreta;
            this.problema = problema;
        }
        
        this.problemaService = new ProblemaService();
        
    }
    
    addProblema() {
        this.problemaService.addProblema(this.problema);
    }
    
    getProblema(codigo: string) {
        return this.problemaService.getProblema(codigo);
    }
    
    getProblemas() {
        return this.problemaService.getProblemas();
    }


}