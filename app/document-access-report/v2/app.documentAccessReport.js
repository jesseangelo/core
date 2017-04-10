(function() {
  'use strict';

  var app = angular.module('app.documentAccessReport');

  app.controller('DocumentAccessReportController2', DocumentAccessReportController2);

  function DocumentAccessReportController2() {

      var ctrl = this;

      ctrl.firmFilter = "";
      ctrl.contactFilter = "";
      ctrl.docFilter = "";
      ctrl.showDefaultSidebarContent = false;
      ctrl.active = 0;
      ctrl.lastActive = 0;
      ctrl.showExtendedSearch = false;
      ctrl.searchString = "";
    

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
        ctrl.searchString = "Firm Search" + ctrl.firmFilter;
        clearDocDetail();
        clearContactDetail();
      }

      function clearFirmDetail() {
        ctrl.firmFilter = ""
      }

      function showContactDetail() {
        ctrl.active = 1;
        ctrl.contactFilter = ": FERNANDO ALONSO";
        ctrl.searchString = "Contact Search" + ctrl.contactFilter;
        clearDocDetail();
        clearFirmDetail();
      }

      function clearContactDetail() {
        ctrl.contactFilter = "";
      }

      function showDocDetail() {
        ctrl.active = 2;
        ctrl.docFilter = ": 2017 Financials";
        ctrl.searchString = "Document Search" + ctrl.docFilter;
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
