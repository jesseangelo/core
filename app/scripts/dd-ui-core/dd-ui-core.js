(function() {
  'use strict';

  var app = angular.module('dd-ui-core', ['ui.bootstrap']);

  app.controller('ddUICoreController', ddUICoreController);

  function ddUICoreController(ddUiCoreService) {
      var ctrl = this;

      //ctrl.isSideBarMaximized = false;
      ctrl.getSidebarState = getSidebarState;

      function getSidebarState() {
        return ddUiCoreService.getSidebarState();
      }

  }

  app.factory('ddUiCoreService', function() {
    var isSidebarMaximized = false;

    return {
      getSidebarState: function () {
        return isSidebarMaximized;
      },
      maximizeSidebar: function () {
        isSidebarMaximized = true;
      },
      maximizeSidebar: function () {
        isSidebarMaximized = false;
      },
      toggle: function () {
        isSidebarMaximized = !isSidebarMaximized;
      }
    }

  });

})();
