angular.module('app').value('mvToastr', toastr);

angular.module('app').service('mvNotifier', function(mvToastr) {
  return {
    notifySuccess: function(msg) {
      mvToastr.success(msg);
      console.log(msg);
    },
    notifyError: function(msg) {
      mvToastr.error(msg);
      console.log(msg);
    },
    notifyWarning: function(msg) {
      mvToastr.warning(msg);
      console.log(msg);
    }
  }
});