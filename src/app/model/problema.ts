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

    constructor(codigo: string, titulo: string, enunciado: string, dica: string, imagemCodigo: string, imagem: string, pontuacao: number, dificuldade: number, alternativaA: string, alternativaB: string, alternativaC: string, alternativaD: string, alternativaCorreta: string){
        this.codigo=codigo;
        this.titulo=titulo;
        this.enunciado=enunciado;
        this.dica=dica;
        this.imagemCodigo=imagemCodigo;
        this.imagem=imagem;
        this.pontuacao=pontuacao;
        this.dificuldade=dificuldade;
        this.alternativaA=alternativaA;
        this.alternativaB=alternativaB;
        this.alternativaC=alternativaC;
        this.alternativaD=alternativaD;
        this.alternativaCorreta=alternativaCorreta;
    }

}