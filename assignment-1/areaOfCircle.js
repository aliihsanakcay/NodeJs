const PI = 3.14;
const argument = process.argv.slice(2);

const areaOfCircle = (radius) => {
  if (radius && radius >= 0) {
    let area = PI * radius ** 2;
    console.log(`Yarıçapı ${radius} olan dairenin alanı: ${area}`);
  }
}

areaOfCircle(argument[0]);