/**
 * ng-FitText.js v4.2.3
 * https://github.com/patrickmarabeas/ng-FitText.js
 *
 * Original jQuery project: https://github.com/davatron5000/FitText.js
 *
 * Copyright 2015, Patrick Marabeas http://marabeas.io
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Date: 03/03/2017
 */

(function(window, document, angular, undefined) {

  'use strict';

  angular.module('ngFitText', [])
    .value('fitTextDefaultConfig', {
      'debounce'    : false,
      'delay'       : 250,
      'loadDelay'   : 10,
      'compressor'  : 1,
      'min'         : 0,
      'max'         : Number.POSITIVE_INFINITY
    })

    .directive('fittext', [
      '$timeout',
      'fitTextDefaultConfig',
      'fitTextConfig',

      function($timeout, config, fitTextConfig) {
        return {
          restrict: 'A',
          scope: true,
          link: function(scope, element, attrs) {

            angular.extend(config, fitTextConfig.config);

            var parent          = element.parent()
              , domElem         = element[0]
              , domElemStyle    = domElem.style
              , computed        = window.getComputedStyle(element[0], null)
              , newlines        = element.children().length || 1
              , loadDelay       = attrs.fittextLoadDelay || config.loadDelay
              , compressor      = isNaN(parseInt(attrs.fittext)) ? config.compressor : attrs.fittext
              , min             = attrs.fittextMin || config.min
              , max             = attrs.fittextMax || config.max
              , minFontSize     = min ==='inherit'? computed['font-size'] : min
              , maxFontSize     = max ==='inherit'? computed['font-size'] : max
              , lineHeight      = computed['line-height']
              , display         = computed['display']
              , calcSize        = 10
              , resizePromise
              ;

            function calculate() {
              var ratio = (calcSize * newlines) / domElem.offsetWidth / newlines;
              return Math.max(
                Math.min(((parent[0].offsetWidth - (parseFloat(getComputedStyle(parent[0]).paddingLeft) + parseFloat(getComputedStyle(parent[0]).paddingRight))) - 6) * ratio * compressor,
                  parseFloat(maxFontSize)
                ),
                parseFloat(minFontSize)
              )
            }

            function resize() {
              // Don't calculate for elements with no width or height
              if (domElem.offsetHeight * domElem.offsetWidth === 0)
                return;

              // Set standard values for calculation
              domElemStyle.fontSize       = calcSize + 'px';
              domElemStyle.lineHeight     = '1';
              domElemStyle.display        = 'inline-block';

              // Set usage values
              domElemStyle.fontSize       = calculate() + 'px';
              domElemStyle.lineHeight     = lineHeight;
              domElemStyle.display        = display;
            }

            function resizer() {
              if(resizePromise)
                $timeout.cancel(resizePromise);

              resizePromise = $timeout(function() {
                resizePromise = null;
                resize();
              }, 5);
            }

            $timeout( function() { resizer() }, loadDelay);

            scope.$watch(function() {
              return [
                scope.$eval(attrs.ngBind),
                parent[0].offsetWidth,
                element[0].offsetWidth
              ].join('_');
            }, function() {
              resizer();
            });

            config.debounce
              ? angular.element(window).bind('resize', config.debounce(function(){ scope.$apply(resizer)}, config.delay))
              : angular.element(window).bind('resize', function(){ scope.$apply(resizer)});
          }
        }
      }
    ])

    .provider('fitTextConfig', function() {
      var self = this;
      this.config = {};
      this.$get = function() {
        var extend = {};
        extend.config = self.config;
        return extend;
      };
      return this;
    });

})(window, document, angular);
