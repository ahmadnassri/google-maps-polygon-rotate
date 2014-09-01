/**
 * google.maps.Polygon.rotate() — Rotate a google.maps.Polygon on Google Maps V3 relative to a google.maps.LatLng
 * @author Ahmad Nassri <ahmad@ahmadnassri.com> (http:/www.ahmadnassri.com/)
 * @repository https://github.com/ahmadnassri/google-maps-rotate
 * @license MIT
 *
 * @requires google.maps.LatLng.distanceTo
 *
 * @method rotate
 *
 * @param {Number} angle Degrees to rotate
 * @param {Object} point A google.maps.LatLng object to rotate relative to
 *
 * @return {Number} Returns A google.maps.LatLng with new coordinates
 */

 google.maps.LatLng.prototype.rotate = function (angle, origin) {
  var radianAngle = angle * (Math.PI / 180);

  var radius = this.distanceTo(origin);
  var theta = radianAngle + Math.atan2(this.lng() - origin.lng(), this.lat() - origin.lat());

  var x = origin.lat() + (radius * Math.cos(theta));
  var y = origin.lng() + (radius * Math.sin(theta));

  return new google.maps.LatLng(x, y);
};
