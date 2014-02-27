angular.module('app').controller('mvCourseListCtrl', function($scope, mvCourse) {
  $scope.courses = mvCourse.query();

  $scope.sortOptions = [
    {value:'title', text: 'Sort By Title'},
    {value:'published', text: 'Sort By Published Date'}
  ];
  $scope.sortOrder = $scope.sortOptions[0].value;
});