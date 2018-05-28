import { Injectable } from '@angular/core';

@Injectable()
export class JogoDaVelhaService {

  private readonly TAM_TAB: number = 3; // TAM_TAB tamanho do tabuleiro; 3x3 
  private readonly X: number = 1; // Representação da peça número 1: X 
  private readonly O: number = 2; // Representação da peça número 2: O (Círculo)
  private readonly VAZIO: number = 0; // Representação do numero 0

  private tabuleiro: any; // Tabuleiro: array multidimensional, 3 linhas por 3 colunas (representação do tabuleiro)
  private numMovimentos: number; // Número de Movimentos 
  private vitoria: any; // Armazena as posições da Vitória. Guardará a posição das peças. 

 
  private _jogador: number; // Jogador Corrente

  // Representará em qual tempo elas devem exibir
  private _showInicio: boolean; // Flag Booleana
  private _showTabuleiro: boolean; // Flag Booleana
  private _showFinal: boolean; // Flag Booleana

  constructor() { }

  /**
   * Inicializa o jogo. Define exibição da tela inicial.
   * 
   * @return void
   */
  inicializar(): void {
    this._showInicio = true; 
    this._showTabuleiro = false;
    this._showFinal = false;
    this.numMovimentos = 0;
    this._jogador = this.X; // O jogador X começa primeiro (usuário)
    this.vitoria = false; // Definida como falsa porque não existe vitória ainda
    this.inicializarTabuleiro();
  }

  /**
   * Inicializa o tabuleiro do jogo com vazio para todas 
   * as posições do Array (9).
   * Uma vez que não tem nenhuma peça selecionada, inicializa como VAZIO
   * Faz uma intereção com todas as linhas do tabuleiro, a cada linha ele adiciona VAZIO, VAZIO, VAZIO
   * @return void
   */
  inicializarTabuleiro(): void {
    this.tabuleiro = [this.TAM_TAB];
    for (let i = 0; i < this.TAM_TAB; i++) {
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO];
    }
  }

  /**
   * Retorna se a tela de início deve ser exibida.
   * 
   * @return boolean
   */
  get showInicio(): boolean {
    return this._showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibido.
   * 
   * @return boolean
   */
  get showTabuleiro(): boolean {
    return this._showTabuleiro;
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibida.
   * 
   * @return boolean
   */
  get showFinal(): boolean {
    return this._showFinal;
  }

  /**
   * Retorna o número do jogador a jogar.
   * 
   * @return number
   */
  get jogador(): number {
    return this._jogador;
  }

  /**
   * Exibe o tabuleiro.
   * Ação para Inicializar o jogo (Clique para Inicializar) 
   * @return void
   */
  iniciarJogo(): void {
    this._showInicio = false; // False: esconde a tela showInicio
    this._showTabuleiro = true; // True: Adiciona o showTabuleiro
  }

  /**
   * Realiza uma jogada dado as coordenadas do tabuleiro.
   *
   * @param number posX
   * @param number posY
   * @return void
   */
  jogar(posX: number, posY: number): void {}

  fimJogo(linha: number, coluna: number, 
      tabuleiro: any, jogador: number) {}

  cpuJogar(): void {}

  obterJogada(jogador: number) {
  }

  /**
   * Retorna se a peça X deve ser exibida para a 
   * coordena informada.
   * Será utilizado em cada uma das posições do tabueliro para 
   * verificar se ele deve exibir o X ou não, basicamente dado a uma coordenada,
   * ele verifica se a posição existe um X.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirX(posX: number, posY: number): boolean {
    return this.tabuleiro[posX][posY] === this.X;
  }

  /**
   * Retorna se a peça O deve ser exibida para a 
   * coordena informada.
   * Será utilizado em cada uma das posições do tabueliro para 
   * verificar se ele deve exibir o O ou não, basicamente dado a uma coordenada,
   * ele verifica se a posição existe um O.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirO(posX: number, posY: number): boolean {
    return this.tabuleiro[posX][posY] === this.O;
  }

  /**
   * Retorna se a marcação de vitória deve ser exibida para a 
   * coordena informada.
   * Marca se deve ilustrar o verdade no backgroud pra detacar se é uma
   * posição de vitória
   * 
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirVitoria(posX: number, posY: number) {}

  /**
   * Inicializa um novo jogo, assim como exibe o tabuleiro.
   *
   * @return void
   */
  novoJogo(): void {
    this.inicializar();
    this._showFinal = false;
    this._showInicio = false;
    this._showTabuleiro = true;
  }

}
