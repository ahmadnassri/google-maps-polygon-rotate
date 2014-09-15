google.maps.Point.prototype.rotate = function (angle, origin) {
  rad = angle * (Math.PI / 180.0); 

  var x = this.x - origin.x;
  var y = this.y - origin.y;

  return new google.maps.Point(
    x * Math.cos(rad) - y * Math.sin(rad) + origin.x,
    x * Math.sin(rad) + y * Math.cos(rad) + origin.y
  );
};
