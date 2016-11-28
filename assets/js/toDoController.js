angular.module('toDoApp', [])
    .controller('toDoController', ToDoController);
	
function ToDoController() {
        this.tasks = [];
        this.add = function() {
            $scope.tasks.push(this.title);
        }
        $scope.delete = function() {
            $scope.tasks.splice(this.$index, 1);
        }
    }