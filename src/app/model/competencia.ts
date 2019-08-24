import { Problema } from './problema';

export class Competencia{
    nome: string;
    descricao: string;
    codigo: string;
    imagem: string;
    problemas: Array<Problema> = []; 
    teoria: Array<string> = [];
    exemplo: Array<string> = [];

    constructor(nome: string, descricao: string, codigo: string, imagem: string, problemas: Problema[], teoria: string[], exemplo: string[]){
        this.nome=nome;
        this.descricao=descricao;
        this.codigo=codigo;
        this.imagem=imagem;
        this.problemas=problemas;
        this.teoria=teoria;
        this.exemplo=exemplo;
    }

}