require('zone.js');

import { AppModule } from './toDoController/toDoController.ts';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule);