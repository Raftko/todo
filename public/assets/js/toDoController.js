angular.module('toDoApp', [])
    .controller('toDoController', ToDoController);
	
class ToDoController() {
        public tasks = [];

        constructor() {
              console.log(123);
        }

        add() {
            this.tasks.push(this.title);
        }
        delete() {
            this.tasks.splice(this.$index, 1);
        }
    }