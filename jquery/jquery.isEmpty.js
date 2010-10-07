/**
 * @fileOverview The jQuery.isEmpty plugin.
 * @author <a href="mailto:kyle.florence@gmail.com">Kyle Florence</a>
 * @version 1.0
 */

(function($) {
    $.extend({
        /**
         * @function
         * @name jQuery.isEmpty
         * @param Mixed o The argument to test against.
         * @return Boolean Returns true if argument is empty, false otherwise.
         */
        isEmpty: function(o) {
            if ($.isArray(o) || typeof o === "string") {
                return (o.length ? false : true);
            } else if (typeof o === "object") {
                for (var p in o) {
                    if (o.hasOwnProperty(p)) {
                        return false;
                    }
                }
                return true;
            } else {
                return (o ? false : true);
            }
        }
    });
})(jQuery);