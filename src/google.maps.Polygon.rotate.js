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
  var gmap = map || this.getMap();
  if (gmap===undefined) {
    console.warn('No valid google maps object found');
    return;
  }
  var coords = this.getPath().getArray();
  var origin = gmap.getProjection().fromLatLngToPoint(latLng);
  var polygon = this;

  coords.forEach(function (point, index) {
    pixelCoord = gmap.getProjection().fromLatLngToPoint(point).rotate(angle, origin);
    coords[index] = gmap.getProjection().fromPointToLatLng(pixelCoord);
  });

  this.setPaths(coords);
};
