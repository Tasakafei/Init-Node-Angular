/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  12/12/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
(function () {
    'use strict';
    var app = angular.module('ihm');
    app.directive('oneMenu', function () {
        return {
            restrict: 'E',
            templateUrl: '/components/menu/one_menu/one_menu.html',
            controller: 'oneMenuCtrl',
            controllerAs: 'menu',
            scope: {
                direction: "@direction"
            }
        };
    });
})();