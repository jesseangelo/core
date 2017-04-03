(function() {
  'use strict';

  var app = angular.module('dd-ui-core', []);

  app.factory('ddUiCoreService', function() {
    var isSideBarMaximized = false;

    return {
      getSidebarState: function () {
        return this.isSideBarMaximized;
      }
    }

  })

})();
