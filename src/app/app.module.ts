import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platformBrowser';
import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule
    ], 
    declarations: [
        AppComponent
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule {}