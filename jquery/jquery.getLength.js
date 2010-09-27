/**
 * @fileOverview The jQuery.getLength plugin.
 * @author <a href="mailto:kyle.florence@gmail.com">Kyle Florence</a>
 * @version 1.0
 */

(function($) {
    /**
     * @param Mixed a The argument to test against.
     * @return Mixed Returns the length of argument or undefined if not known.
     */
    $.getLength = function(a) {
        if ($.isArray(a) || typeof a === "string") {
            return a.length;
        } else if (typeof a === "object") {
            var len = 0;
            $.each(a, function() {
                len++;
            });
            return len;
        } else {
            return undefined;
        }
    };
})(jQuery);