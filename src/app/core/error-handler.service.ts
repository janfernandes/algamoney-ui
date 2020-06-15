import { Injectable } from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private messageService: MessageService) { }

  handle(errorResponse: any) {
    let msg: string;
    if (typeof errorResponse === 'string'){
      msg = errorResponse;
    }
    else if (typeof errorResponse === 'object' && errorResponse.status >= 400 && errorResponse.status <= 499){
      msg = errorResponse.error[0].mensagemUsuario;
    }
    else {
      msg = 'Erro ao processar serviço remoto. Tente novamente.';
    }

    this.messageService.add({
      severity: 'error',
      summary: 'Error Message',
      detail: msg
    });
  }
}
