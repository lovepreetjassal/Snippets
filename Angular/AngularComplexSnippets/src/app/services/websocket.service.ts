import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

import { environment } from '../../environments/environment';
import { catchError, tap, switchAll } from 'rxjs/operators';
import { EMPTY, Subject,Observable ,Observer} from 'rxjs';
export const WS_ENDPOINT = environment.wsEndpoint;
  

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  constructor() { 
   
  }

  public socket$ :WebSocketSubject<any> = webSocket(WS_ENDPOINT);

  public sendMessage(msg: any) {
    this.socket$.next(msg);
  }

  public disconnect(){
    this.socket$.unsubscribe();
  }
}
