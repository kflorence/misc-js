/**
 * @fileOverview jquery.type-patch.js
 *
 * Provides backwards compatibility for the jQuery.type function for jQuery
 * versions less than 1.4.3.
 */

;(function($) {
  if (!$.type) {
    var class2type = {},
        toString = Object.prototype.toString;

    // Populate the class2type map
    $.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(i, name) {
      class2type["[object " + name + "]"] = name.toLowerCase();
    });

    $.extend({
      type: function( obj ) {
        return obj == null ? String( obj ) : class2type[ toString.call(obj) ] || "object";
      }
    });
  }
})(jQuery);
