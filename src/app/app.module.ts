import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SocketIoModule, SocketIoConfig} from 'ng-socket-io';
import {AppComponent} from './app.component';
const config: SocketIoConfig = {
    url: 'http://localhost:3000',
    options: {}
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SocketIoModule.forRoot(config)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}