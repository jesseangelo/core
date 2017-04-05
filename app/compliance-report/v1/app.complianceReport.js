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
      ctrl.showExtendedSearch = false;

  

      //API
      ctrl.showFirmDetail = showFirmDetail;
      ctrl.clearFirmDetail = clearFirmDetail;
      ctrl.showContactDetail = showContactDetail;
      ctrl.clearContactDetail = clearContactDetail;
      ctrl.showDocDetail = showDocDetail;
      ctrl.clearDocDetail = clearDocDetail;

      ctrl.clickShow = clickShow;

      function showFirmDetail() {
        ctrl.active = 0;
        ctrl.firmFilter = ": BNP PARIBAS";
        clearDocDetail();
        clearContactDetail();
      }

      function clearFirmDetail() {
        ctrl.firmFilter = ""
      }

      function showContactDetail() {
        ctrl.active = 1;
        ctrl.contactFilter = ": FERNANDO ALONSO";
        clearDocDetail();
        clearFirmDetail();
      }

      function clearContactDetail() {
        ctrl.contactFilter = "";
      }

      function showDocDetail() {
        ctrl.active = 2;
        ctrl.docFilter = ": 2017 Financials";
        clearFirmDetail();
        clearContactDetail();
      }

      function clearDocDetail() {
        ctrl.docFilter = "";
      }

      function clickShow() {
        ctrl.showExtendedSearch = !ctrl.showExtendedSearch;
      }

  }

})();
