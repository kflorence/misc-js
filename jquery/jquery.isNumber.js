/**
 * @fileOverview The jQuery.isNumber plugin.
 * @author <a href="mailto:kyle.florence@gmail.com">Kyle Florence</a>
 * @version 1.0
 */

(function($) {
    $.extend({
        /**
         * @function
         * @name jQuery.isNumber
         * @param Mixed n The argument to test against.
         * @return Boolean Returns true if argument is a finite number, false otherwise.
         */
        isNumber: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
    });
})(jQuery);