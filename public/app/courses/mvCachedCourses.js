angular.module('app').factory('mvCachedCourses', function(mvCourse){
  var courseList;
  courseList = courseList || mvCourse.query();
  return {
    query: function () {
      courseList = courseList || mvCourse.query();
      return courseList;
    }
  }
});