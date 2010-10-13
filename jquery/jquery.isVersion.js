/**
 * @fileOverview The jQuery.isVersion plugin.
 * @author <a href="mailto:kyle.florence@gmail.com">Kyle Florence</a>
 * @version 1.0
 */

(function($) {
    $.extend({
        /**
        * Used for jQuery version test cases.
        * 
        * @function
        * @name jQuery.isVersion
        * 
        * @param {String} left A string containing the version that will become
        *    the left hand operand.
        * @param {String} oper The comparison operator to test against. By
        *    default, the "==" operator will be used.
        * @param {String} right A string containing the version that will
        *    become the right hand operand. By default, the current jQuery
        *    version will be used.
        *        
        * @return {Boolean} Returns the evaluation of the expression, either
        *    true or false.
        */
        isVersion: function(left, oper, right) {
            if (left) {
                var pre = /pre/i,
                    replace = /[^\d]+/g,
                    oper = oper || "==",
                    right = right || $().jquery,
                    l = left.replace(replace, ''),
                    r = right.replace(replace, ''),
                    l_len = l.length, r_len = r.length,
                    l_pre = pre.test(left), r_pre = pre.test(right);

                l = (r_len > l_len ? parseInt(l) * ((r_len - l_len) * 10) : parseInt(l));
                r = (l_len > r_len ? parseInt(r) * ((l_len - r_len) * 10) : parseInt(r));
                
                switch(oper) {
                    case "==": {
                        return (true === (l == r && (l_pre == r_pre)));
                    }
                    case ">=": {
                        return (true === (l >= r && (!l_pre || l_pre == r_pre)));
                    }
                    case "<=": {
                        return (true === (l <= r && (!r_pre || r_pre == l_pre)));
                    }
                    case ">": {
                        return (true === (l > r || (l == r && r_pre)));
                    }
                    case "<": {
                        return (true === (l < r || (l == r && l_pre)));
                    }
                }
            }
            
            return false;
        }
    });
})(jQuery);