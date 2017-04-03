(function() {
  'use strict';

  var app = angular.module('app.documentAccessReport', ['dd-ui-core']);

  app.controller('DocumentAccessReportController', DocumentAccessReportController);

  function DocumentAccessReportController() {

      var ctrl = this;

      ctrl.firmFilter = "";
      ctrl.contactFilter = "";
      ctrl.docFilter = "";
      ctrl.showDefaultSidebarContent = false;
      ctrl.active = 0;

      //API
      ctrl.showFirmDetail = showFirmDetail;
      ctrl.clearFirmDetail = clearFirmDetail;

      ctrl.showDocDetail = showDocDetail;
      ctrl.clearDocDetail = clearDocDetail;

      function showFirmDetail() {
        ctrl.active = 0;
        ctrl.firmFilter = ": BNP PARIBAS";
        clearDocDetail();
      }

      function clearFirmDetail() {
        ctrl.firmFilter = ""
      }

      function showDocDetail() {
        ctrl.active = 2;
        ctrl.docFilter = ": DOCUMENT 1";
        clearFirmDetail();
      }

      function clearDocDetail() {
        ctrl.docFilter = "";
      }

  }

})();
