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
      ctrl.states = [];
    

      //API
      ctrl.showFirmDetail = showFirmDetail;
      ctrl.showContactDetail = showContactDetail;
      ctrl.showDocDetail = showDocDetail;
      ctrl.backButton = backButton;
      ctrl.clickShow = clickShow;
      ctrl.setState = setState;

      function setState(s, back) {
        //ctrl.lastActive = ctrl.active;
        //console.log('stating is now ' + s);

        if (!back) {
          //console.log('get back ');
          ctrl.states.push(s);
        }
        ctrl.searchString = "";
        ctrl.firmFilter = ""
        ctrl.contactFilter = "";
        ctrl.docFilter = "";
        ctrl.showExtendedSearch = false;
        angular.element(document).find("#mainWindow").removeClass("fadeContent")

        switch(s) {
          case 0:
            ctrl.active = 0;
            break;
          case 1:
            ctrl.active = 1;
            break;
          case 2:
            ctrl.active = 2;
            break;
          case 3:
            ctrl.active = 0;
            ctrl.firmFilter = ": BNP PARIBAS";
            ctrl.searchString = "Firm Search" + ctrl.firmFilter;
            break;
          case 4:
            ctrl.active = 1;
            ctrl.contactFilter = ": FERNANDO ALONSO";
            ctrl.searchString = "Contact Search" + ctrl.contactFilter;
            break;
          case 5:
            ctrl.active = 2;
            ctrl.docFilter = ": 2017 Financials";
            ctrl.searchString = "Document Search" + ctrl.docFilter;
            break;
        }

      }

      function backButton() {
        console.log("current is: " + ctrl.states)
        if(ctrl.states.length >= 1) {
          ctrl.states.pop();
        }
        console.log("now is: " + ctrl.states)
        ctrl.setState(ctrl.states[ctrl.states.length-1], true);
      }

      function showFirmDetail() {
        setState(3)        
      }

      function showContactDetail() {
        setState(4)
      }

      function showDocDetail() {
        setState(5)
      }

      function clickShow() {
        ctrl.showExtendedSearch = !ctrl.showExtendedSearch;
        if(ctrl.showExtendedSearch) {
          angular.element(document).find("#mainWindow").addClass("fadeContent")
        } else {
          angular.element(document).find("#mainWindow").removeClass("fadeContent")
        }
      }

  }

})();
