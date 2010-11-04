/**
 * @fileOverview The jQuery.getObjectFromArray plugin.
 * @author <a href="mailto:kyle.florence@gmail.com">Kyle Florence</a>
 * @version 1.0
 */

(function($) {
    $.extend({
        /**
         *  @function
         *  @name jQuery.getObjectFromArray
         *  @param {String} value The value we are looking for.
         *  @param {String} key The key to match this value against.
         *  @param {Array} arr The array to search within.
         *  @return {Mixed} Returns the object containing the match, or undefined if no match is found.
         */
        getObjectFromArray: function(value, key, arr) {
            var i, l;

            for (i = 0, l = arr.length; i < l; i++) {
                if (arr[i][key] == value) {
                    return arr[i];
                }
            }

            return undefined;
        }
    });
})(jQuery);