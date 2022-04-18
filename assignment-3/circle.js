
const PI = 3.14;
function circleArea(r) {
  if (r && r >= 0) {
    let area = PI * r ** 2 * 10 / 10;
    return area;
  }
  return;
}

function circleCircumference(r) {
  if (r && r >= 0) {
    let circumference = 2 * PI * r * 10 / 10;
    return circumference;
  }
  return;
}

module.exports = {circleArea, circleCircumference};