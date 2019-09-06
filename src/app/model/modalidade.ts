import { Competencia } from './competencia';

export class Modalidade{
    nome: string;
    descricao: string;
    codigo: string;
    competencias: Array<Competencia> = [];
    imagem: string;

    constructor(nome: string, descricao: string, codigo: string, competencias: Competencia[], imagem: string){
        this.nome=nome;
        this.descricao=descricao;
        this.codigo=codigo;
        this.competencias=competencias;
        this.imagem=imagem;
    }
}