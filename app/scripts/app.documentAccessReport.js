(function() {
  'use strict';
  
  var app = angular.module('app.documentAccessReport', ['ui.bootstrap', 'dd-ui-core']);

  app.controller('DocumentAccessReportController', DocumentAccessReportController);

  function DocumentAccessReportController() {
  
      var ctrl = this;
      
      ctrl.showDefaultSidebarContent = false;

      function showFirmDetail() {
        console.log('hello world')
      }
  }

})();