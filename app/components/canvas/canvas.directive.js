/************************************************
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  12/12/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/
(function () {
    'use strict';
    angular.module('ihm')
        .directive('tableCanvas', function () {
            return {
                restrict: 'E',
                templateUrl: '/components/canvas/canvas.html',
                controller: 'canvasCtrl',
            };
        });
})();