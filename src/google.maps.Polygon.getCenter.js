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

 google.maps.Polygon.prototype.getCenter = function () {
  var coords = this.getPath().getArray();

  var bounds = new google.maps.LatLngBounds();

  coords.forEach(function (point, index) {
    bounds.extend(coords[index]);
  });

  return bounds.getCenter();
};
