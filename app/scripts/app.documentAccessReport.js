(function() {
  'use strict';
  
  var app = angular.module('app.documentAccessReport', ['ui.bootstrap', 'dd-ui-core']);

  app.controller('DocumentAccessReportController', DocumentAccessReportController);

  function DocumentAccessReportController() {
  
      var ctrl = this;
      
      ctrl.firmFilter = "";
      ctrl.contactFilter = "";
      ctrl.documentFilter = "";
      ctrl.showDefaultSidebarContent = false;

      //API
      ctrl.showFirmDetail = showFirmDetail;
      ctrl.clearFirmDetail = clearFirmDetail;
      ctrl.showDocsAccessed = showDocsAccessed;

      function showFirmDetail() {
        ctrl.firmFilter = ": BNP PARIBAS"
      }

      function clearFirmDetail() {
        ctrl.firmFilter = ""
      }

      function showDocsAccessed() {
        console.log('docs accessed');
      }
  }

})();