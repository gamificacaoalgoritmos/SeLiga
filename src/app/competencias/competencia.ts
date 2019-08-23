export class Competencia{
    nome: string;
    descricao: string;
    imagemUrl: String;
    constructor(nome: string, descricao: string, imagemUrl: string){
        this.nome=nome;
        this.descricao=descricao;
        this.imagemUrl=imagemUrl;
    }
}