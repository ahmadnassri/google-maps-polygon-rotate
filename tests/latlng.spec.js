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

describe("LatLng", function() {
  it("should calculate distance from center to first point", function() {
    var polyCenter = poly.getCenter();
    expect(polyCenter.distanceTo(triangleCoords[0])).to.equal(7.725813088482826);
  });

  it("should rotate a LatLng relative to another LatLng", function() {
    var polyCenter = poly.getCenter();

    var newLatLng = triangleCoords[0].rotate(45, polyCenter);

    expect(Math.round(newLatLng.lat())).to.equal(31);
    expect(Math.round(newLatLng.lng())).to.equal(-78);
  });
});
