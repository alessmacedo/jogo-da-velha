/*
 * Arquivo de Teste
 */
import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
/*
* Importação do Module jogo-da-velha (index.ts)
* Para que o arquivo de teste também mantenha a mesma configuração
*/
import { JogoDaVelhaModule } from './jogo-da-velha'; 
                                                     

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      
      imports: [ //Adicionado Imports
        JogoDaVelhaModule // A Module deve ser importada em 'imports'
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
