/**
 * google.maps.Polygon.rotate() - Rotates a google.maps.Point relative to another google.maps.Point
 * @author Ahmad Nassri <ahmad@ahmadnassri.com> (http:/www.ahmadnassri.com/)
 * @repository https://github.com/ahmadnassri/google-maps-rotate
 * @license MIT
 *
 * @method rotate
 *
 * @param {Number} angle Degrees to rotate
 * @param {Object} point A google.maps.Point object to rotate relative to
 *
 * @return {Number} Returns A google.maps.Point with new coordinates
 */

google.maps.Point.prototype.rotate = function (angle, origin) {
  var rad = angle * (Math.PI / 180);

  var x = this.x - origin.x;
  var y = this.y - origin.y;

  return new google.maps.Point(
    x * Math.cos(rad) - y * Math.sin(rad) + origin.x,
    x * Math.sin(rad) + y * Math.cos(rad) + origin.y
  );
};
