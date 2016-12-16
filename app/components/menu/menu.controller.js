(function() {
    'use strict';

    angular.module('ihm')
        .controller('menuCtrl', function() {
            this.bottomLeftisOpen = false;
            this.bottomRightisOpen = false;
            this.topLeftisOpen = false;
            this.topRightisOpen = false;
        });
})();