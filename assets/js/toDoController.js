angular.module('toDoApp', [])
    .controller('toDoController', ToDoController);
	
function ToDoController($scope) {
        $scope.tasks = [];
        $scope.add = function() {
            $scope.tasks.push($scope.title);
        }
        $scope.delete = function() {
            $scope.tasks.splice(this.$index, 1);
        }
    }