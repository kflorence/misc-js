/**
 * Fixes binding the "change" event to checkboxes and select[type=multiple]
 * for Internet Explorer. See: https://gist.github.com/770449
 *
 * @param {jQuery|Element|Element[]} elements
 *    The element we wish to bind the event to.
 *
 * @param {String} eventType
 *    The name of the event we want to bind to.
 *
 * @param {function} callback
 *    The function to execute when the event is triggered
 */
var bind = function(elements, eventType, callback) {
  var $elements = $(elements),
    rValidProps = /^(checked|selectedIndex)$/,
    hasPropertyChange = ("onpropertychange" in document.body);

  if (!$elements.length || typeof eventType !== "string") {
    return $elements;
  }

  if (eventType !== "change") {
    return $elements.bind(eventType, callback);
  }

  $elements.each(function() {
    eventType = hasPropertyChange && (this.type === "checkbox"
      || this.tagName.toLowerCase() === "select" && this.multiple)
      ? "propertychange" : "change";

    $(this).bind(eventType, function(e) {
      if (e.type !== "propertychange"
        || rValidProps.test(window.event.propertyName)) {
        callback.call(this, e);
      }
    });
  });
};

