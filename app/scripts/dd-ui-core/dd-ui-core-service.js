(function() {
  'use strict';

  angular.module('dd-ui-core')

  .factory('ddUiCoreService', function() {
    var isSidebarMaximized = true;
    var isTopBarMaximized = false;

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
      },

      getTopbarState: function () {
        return isTopBarMaximized;
      },
      maximizeTopbar: function () {
        isTopBarMaximized = true;
      },
      minimizeTopbar: function () {
        isTopBarMaximized = false;
      },
      toggleTopbar: function () {
        isTopBarMaximized = !isTopBarMaximized;
      }

    }

  });

})();
