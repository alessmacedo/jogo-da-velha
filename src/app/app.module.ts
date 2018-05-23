import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JogoDaVelhaModule } from './jogo-da-velha'; // Importação do Module jogo-da-velha (index.ts)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JogoDaVelhaModule // A Module deve ser importada em 'imports'
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
