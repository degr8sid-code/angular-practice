//component decorator
import {Component} from '@angular/core';

@Component( {
    //what Angular will select
    //you can use any selector or any custom DOM elements
    //a custom DOM element should have - between it
    selector: 'mw-app',
    //template or template URL
    //this is an inline markup
    //use ` backtick for better readability
    //template: `<h1>My Angular Practice Project</h1>
    //<p>Read More. </p>`
    //this template could be a URL
    //relative path is used here
    templateUrl: './app.component.html',
    //can also used styles Url instead of styles
    styles: [`
    h1 {color: #ffffff;}
    .description {
        font-style: italic,
        color: green
    }
    `]
    

})
export class AppComponent {}