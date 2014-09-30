/**
 * google.maps.Polygon.rotate() - Rotate a google.maps.Polygon relative to a google.maps.LatLng
 * @author Ahmad Nassri <ahmad@ahmadnassri.com> (http:/www.ahmadnassri.com/)
 * @repository https://github.com/ahmadnassri/google-maps-rotate
 * @license MIT
 *
 * @requires google.maps.LatLng.rotate
 * @requires google.maps.Polygon.getCenter
 *
 * @method rotate
 *
 * @param {Number} angle Degrees to rotate
 * @param {Object} point A google.maps.LatLng object to rotate relative to
 *
 * @return {Number} Returns A google.maps.LatLng with new coordinates
 */

google.maps.Polygon.prototype.rotate = function (angle, latLng, map) {
  map = map || this.getMap();

  if (map === undefined) {
    console.warn('No valid google maps object found');
    return;
  }

  var coords = this.getPath().getArray();
  var projection = map.getProjection();
  var origin = projection.fromLatLngToPoint(latLng);

  coords.forEach(function (point, index) {
    var pixelCoord = projection.fromLatLngToPoint(point).rotate(angle, origin);

    coords[index] = projection.fromPointToLatLng(pixelCoord);
  });

  this.setPaths(coords);
};
