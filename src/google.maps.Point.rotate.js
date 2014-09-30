/**
 * google.maps.Polygon.rotate() - Calculates a polygon's center point
 * @author Ahmad Nassri <ahmad@ahmadnassri.com> (http:/www.ahmadnassri.com/)
 * @repository https://github.com/ahmadnassri/google-maps-rotate
 * @license MIT
 *
 * @method getCenter
 *
 * @return {Object} A google.maps.LatLng object
 */

google.maps.Point.prototype.rotate = function (angle, origin) {
  var rad = angle * (Math.PI / 180.0);

  var x = this.x - origin.x;
  var y = this.y - origin.y;

  return new google.maps.Point(
    x * Math.cos(rad) - y * Math.sin(rad) + origin.x,
    x * Math.sin(rad) + y * Math.cos(rad) + origin.y
  );
};
