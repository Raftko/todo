import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

interface ITask {
	name: string;
}

@Component({
  selector: 'to-do',
  templateUrl: '/toDoComponentTemplate.html'
})
class ToDoComponent{
        tasks: ITask[] = [];
		title: string;
		index: number;

        constructor() {
              console.log(123);
        }

        add() {
   console.log(123);
            this.tasks.push({name: this.title});
        }
        remove(task: ITask) {
            this.tasks.splice(this.tasks.indexOf(task), 1);
        }
}

@NgModule({
    imports: [
        BrowserModule,
		FormsModule
    ],
    declarations: [
		ToDoComponent
    ],
    providers: [
    ],
	bootstrap: [
		ToDoComponent
	]
})
export class AppModule {
}



