/**
 * @venus-library mocha
 * @venus-fixture-reset false
 * @venus-fixture map.fixture.html
 * @venus-include map.fixture.js
 * @venus-code ../src/google.maps.Point.rotate.js
 * @venus-code ../src/google.maps.LatLng.rotate.js
 * @venus-code ../src/google.maps.LatLng.distanceTo.js
 * @venus-code ../src/google.maps.Polygon.getCenter.js
 * @venus-code ../src/google.maps.Polygon.rotate.js
 */

var center = {
  lat: 25.3939245,
  lng: -72.473816
};

describe('Polygon', function() {
  before(function () {
    google.maps.event.addListenerOnce(map, 'projection_changed', function() {
      done();
    });
  });

  it('should compute center points', function () {
    var polyCenter = poly.getCenter();
    expect(polyCenter.lat()).to.equal(center.lat);
    expect(polyCenter.lng()).to.equal(center.lng);
  });

  it('should should rotate a polygon 90 degrees around its center', function () {
    var polyCenter = poly.getCenter();
    poly.rotate(90, polyCenter);

    expect(polyCenter.lat()).to.equal(center.lat);
    expect(polyCenter.lng()).to.equal(center.lng);
  });

  it('should should rotate 90 degrees to new paths', function () {
    var polyCenter = poly.getCenter();

    poly.rotate(90, polyCenter);

    var encoded = google.maps.geometry.encoding.encodePath(poly.getPath());

    expect(encoded).to.equal('}htwC`kpgKmdii@xl{tA`}ysAvxhGswoi@qfe}A');
  });
});
