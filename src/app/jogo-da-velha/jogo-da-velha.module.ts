/*
 * Módulo Principal que será responsável pelo Jogo-da-Velha
 *
 * Prompt:
 * $ cd jogo-da-velha
 * $ ng g module jogo-da-velha
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared'; // Importado o serviço

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	JogoDaVelhaComponent
  ],
  /*
  * Adicionado Exports. 
  * Para que o modulo da aplicação consiga visualizar a tag
  */
  exports: [ 
  	JogoDaVelhaComponent // Necessário adicionar o Component em Exports
  ],

  /*
  * Adicionado Providers 
  */
  providers: [
  	JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
