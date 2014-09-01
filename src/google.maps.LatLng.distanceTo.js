/**
 * google.maps.Polygon.rotate() — Calculates the Distance to another google.maps.LatLng object
 * @author Ahmad Nassri <ahmad@ahmadnassri.com> (http:/www.ahmadnassri.com/)
 * @repository https://github.com/ahmadnassri/google-maps-rotate
 * @license MIT
 *
 * @method distanceTo
 *
 * @param {Object} point A google.maps.LatLng object to compare to
 *
 * @return {Number} Returns distance in units
 */

google.maps.LatLng.prototype.distanceTo = function (point) {
  var lat = Math.pow(this.lat() - point.lat(), 2);
  var lng = Math.pow(this.lng() - point.lng(), 2);

  return Math.sqrt(lat + lng);
};
