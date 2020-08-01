import { Competencia } from './competencia';
import { ModalidadeInterface } from '../interfaces/modalidade';
import { ModalidadeService } from '../services/modalidade.service';

export class Modalidade{
    nome: string;
    descricao: string;
    codigo: string;
    competencias: string;
    imagem: string;
    modalidade: ModalidadeInterface;
    modalidadeService: ModalidadeService;

    constructor(modalidade?){
        if (modalidade) {
            this.nome = modalidade.nome;
            this.descricao = modalidade.descricao;
            this.codigo = modalidade.codigo;
            this.competencias = modalidade.competencias;
            this.imagem= modalidade.imagem;    
            this.modalidade = modalidade;
        }
        
        this.modalidadeService = new ModalidadeService();
    }
    
    addModalidade () {
        this.modalidadeService.addModalidade(this.modalidade);
    }
    
    getModalidade (codigo: string) {
        return this.modalidadeService.getModalidade(codigo);
    }
    
    getModalidades () {
        return this.modalidadeService.getModalidades();
    }
}