angular.module('toDoApp', [])
    .controller('toDoController', ToDoController);
	
class ToDoController{
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