(function() {
  'use strict';
  
  var app = angular.module('app', ['ui.bootstrap', 'kendo.directives']);

  app.controller('uiController', uiController);

  function uiController() {
      var ctrl = this;
      ctrl.addAlert = addAlert;
      ctrl.closeAlert = closeAlert;
      ctrl.alerts = [];
      ctrl.treeData = new kendo.data.HierarchicalDataSource({
            data: [
                  { text: "Executed Credit Docs" },
                  { text: "Amendment Docs" },
                  { text: "Financials & Compliance", 
                    items: [
                      { text: "2015 Financials" },
                      { text: "2016 Financials" },
                      { text: "2017 Financials" }
                      ]
                  }
            ]
        })

      function addAlert(type) {
          switch(type) {
              case 0:
                ctrl.alerts.push({ type: 'danger', msg: 'There is an error! Change a few things up and try submitting again.' });
                break;
              case 1:
                ctrl.alerts.push({ type: 'success', msg: 'Well done! You successfully read this important alert message.' });
                break;
              default:
                break;
          }
      }

      function closeAlert(index) {
          ctrl.alerts.splice(index, 1);
      }
  }

})();