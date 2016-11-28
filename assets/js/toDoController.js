angular.module('toDoApp', [])
    .controller('toDoController', ToDoController);
	
function ToDoController() {
        this.tasks = [];
        this.add = function() {
            this.tasks.push(this.title);
        }
        this.delete = function() {
            this.tasks.splice(this.$index, 1);
        }
    }