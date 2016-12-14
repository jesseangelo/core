(function() {
  'use strict';
  
  var app = angular.module('app', ['ui.bootstrap']);

  app.controller('uiController', uiController);

  function uiController() {
      var ctrl = this;
      ctrl.addAlert = addAlert;
      ctrl.closeAlert = closeAlert;
      ctrl.alerts = [
            //{ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
            //{ type: 'success', msg: 'Well done! You successfully read this important alert message.' }
        ];

      function addAlert() {
          ctrl.alerts.push({msg: 'Yellow alert!'});
      }

      function closeAlert(index) {
          ctrl.alerts.splice(index, 1);
      }
  }

})();