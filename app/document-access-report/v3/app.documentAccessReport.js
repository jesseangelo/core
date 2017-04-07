(function() {
  'use strict';

  var app = angular.module('app.documentAccessReport');

  app.controller('DocumentAccessReportController3', DocumentAccessReportController3);

  function DocumentAccessReportController3() {

      var ctrl = this;

      ctrl.showDefaultSidebarContent = false;
      ctrl.active = 0;
      ctrl.showExtendedSearch = false;
      ctrl.searchString = "";
      ctrl.firmSelected = "";
  

      //API
      ctrl.showContactsInFirm = showContactsInFirm;
      ctrl.showUsersDocs = showUsersDocs;
      ctrl.showDocsInFirm = showDocsInFirm;
      ctrl.showDocDetail = showDocDetail;
      ctrl.showFirms = showFirms;

      ctrl.clickShow = clickShow;

      function showFirms() {
        ctrl.active = 0;
        ctrl.firmSelected = "";
        ctrl.searchString = "";
      }

      function showContactsInFirm() {
        ctrl.active = 1;
        ctrl.firmSelected = "Firm: BNP PARIBAS";
        ctrl.searchString = "";
      }

      function showUsersDocs() {
        ctrl.active = 3;
        ctrl.searchString = " > Contact: FERNANDO ALONSO"; 
      }

      function showDocsInFirm() {
        ctrl.firmSelected = "Firm: BNP PARIBAS";
        ctrl.active = 3;
        ctrl.searchString = " > All Documents";
      }

      function showDocDetail() {
        ctrl.active = 4;
        ctrl.searchString = " > Document: 2017 Financials";
      }

      function clickShow() {
        ctrl.showExtendedSearch = !ctrl.showExtendedSearch;
      }

  }

})();
