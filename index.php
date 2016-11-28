<!doctype html>

<html lang="ru">
<head>
  <meta charset="utf-8">

  <title>NewLife ToDo List</title>
  <meta name="description" content="To do list on Angular">
  <meta name="author" content="Alezey Zabolotnij">

  <link rel="stylesheet" href="assets/css/styles.css?v=1.0">
</head>

<body ng-app="toDoApp" ng-controller="toDoController">
  <form ng-submit="add()">
  <input ng-model="title"><button>Добавить задачу</button>
  </form>
  <ul>
    <li ng-repeat="task in tasks track by $index">{{ task }} <button ng-click="delete()">x</button></li>
  </ul>
  <script src="assets/js/angular.min.js"></script>
  <script src="assets/js/toDoController.js"></script>
</body>
</html>