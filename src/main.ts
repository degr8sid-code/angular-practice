//can be used for Bootstrap for any platform

//platform used for dynamic browsing functionality

import {platformBroswerDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
//this is expecting a root module which is already created
platformBroswerDynamic.bootstrapModule(AppModule);