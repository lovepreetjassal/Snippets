import { Component } from '@angular/core';
import { delay, retryWhen, tap } from 'rxjs/operators';
import { WebsocketService } from './services/websocket.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private wsservice: WebsocketService) {
    }

    ngOnInit() {
        //this.connectToServer();
        //this.sendMessageToServer(this.generateTestMessage());
    }

    disconnectFromServer() {
        this.wsservice.disconnect();
    }

    connectToServer() {
        this.wsservice.socket$.pipe(
            retryWhen(
                error => error.pipe(
                    delay(5000),
                    tap(() => {
                        console.log("Retrying..." + new Date().toLocaleTimeString());
                        console.log(error);
                    })))
        ).subscribe(this.processMessageFromServer,
            this.handleWebsocketError,
            this.handleWebsocketConnectionComplete);
    }

    handleWebsocketConnectionComplete() {
        console.log(`Complete!`);
    }

    processMessageFromServer(msg: {}) {
        console.log(msg);
    }

    handleWebsocketError(err: {}) {
        console.log(err);
    }

    sendMessageToServer(message: {}) {
        this.wsservice.sendMessage(message);
    }

    generateTestMessage() {
        return JSON.stringify(
            {
                test: "test"
            }
        )
    }
}