# misc-js
This repository contains a collection of small jQuery plugins, minor JavaScript
and jQuery patches, and other miscellaneous code samples conveniently placed in
one spot.

Currently, the repository contains the following:

## jQuery

* __jQuery.getLength__ - Used to find the length of Strings (character count),
  Arrays (element count) and Objects (property count, excluding prototype-
  inherited properties).
* __jQuery.getObjectFromArray__ - Used to return an Object from an Array of Objects
  by matching a key within the Objects to a value.
* __jQuery.isEmpty__ - Used to find out whether or not a String (zero character
  length), Array (no elements) or Object (no properties) is "empty."
* __jQuery.isNumber__ - Used to determine if a value is truly, in fact, a number.
* __jQuery.isVersion__ - Used for jQuery version test cases.

### jQuery Patches

* __jQuery.extend-patch__ - Provides backwards compatibility to jQuery versions
  less than 1.4 for the jQuery.extend method.

## License
Copyright (c) 2011 Kyle Florence  
Licensed under the GNU General Public License.  
[http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html)
