(function() {
  'use strict';
  
  angular.module('dd-ui-core')

  .factory('ddUiCoreService', function() {
    var isSidebarMaximized = true;

    return {
      getSidebarState: function () {
        return isSidebarMaximized;
      },
      maximizeSidebar: function () {
        isSidebarMaximized = true;
      },
      minimizeSidebar: function () {
        isSidebarMaximized = false;
      },
      toggleSidebar: function () {
        isSidebarMaximized = !isSidebarMaximized;
      }
    }

  });

})();
