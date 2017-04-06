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
      ctrl.searchString = "";
  

      //API
      ctrl.showContactsInFirm = showContactsInFirm;
      ctrl.clearFirmDetail = clearFirmDetail;
      ctrl.showContactDetail = showContactDetail;
      ctrl.clearContactDetail = clearContactDetail;
      ctrl.showDocDetail = showDocDetail;
      ctrl.clearDocDetail = clearDocDetail;

      ctrl.clickShow = clickShow;

      function showContactsInFirm() {
        ctrl.active = 1;
        ctrl.firmFilter = ": BNP PARIBAS";
        ctrl.searchString = "Firm " + ctrl.firmFilter;
        clearDocDetail();
        clearContactDetail();
      }

      function clearFirmDetail() {
        ctrl.firmFilter = ""
      }

      function showContactDetail() {
        ctrl.active = 1;
        ctrl.contactFilter = ": FERNANDO ALONSO";
        ctrl.searchString += " > Contact " + ctrl.contactFilter;
        clearDocDetail();
        clearFirmDetail();
      }

      function clearContactDetail() {
        ctrl.contactFilter = "";
      }

      function showDocDetail() {
        ctrl.active = 2;
        ctrl.docFilter = ": 2017 Financials";
        ctrl.searchString += " > Document " + ctrl.docFilter;
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
