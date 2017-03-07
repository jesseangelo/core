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
        });

      ctrl.Data = new kendo.data.TreeListDataSource({
          data: [
            { id: 1, File: "Cashflow Statement Q1 2017", FilePath: "2017 Financials", Date: "28-Feb-2017", Declaration: "Public", Status: "", Remove: "", parentId: null },
            { id: 2, File: "Balance Sheet Q1 2017", FilePath: "2017 Financials", Date: "28-Feb-2017", Declaration: "Public", Status: "", Remove: "", parentId: null },
            { id: 3, File: "Income Statement Q1 2017", FilePath: "2017 Financials", Date: "28-Feb-2017", Declaration: "Public", Status: "", Remove: "", parentId: null },
            { id: 4, File: "Cashflow Statement Q4 2016", FilePath: "2016 Financials", Date: "28-Feb-2017", Declaration: "Public", Status: "", Remove: "", parentId: null },
            ],
          schema: {
              model: {
                  id: "id",
                  expanded: true
              }
          }
      });


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