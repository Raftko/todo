import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
		ToDoComponent
    ],
    providers: [
    ]
})
export class AppModule {
}


	
@Component({
  selector: 'to-do',
  template: '....'
})
class ToDoComponent{
        public tasks = [];

        constructor() {
              console.log(123);
        }

        add() {
   console.log(123);
            this.tasks.push(this.title);
        }
        deletew() {
            this.tasks.splice(this.$index, 1);
        }
}