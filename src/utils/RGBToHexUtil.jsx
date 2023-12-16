// Function to convert the RGB color to Hex color
const convertRGBToHex = (rgb) => {
  const regex = /\((\d+), (\d+), (\d+)\)/;
  const [, r, g, b] = rgb.match(regex);
  return `#${(+r).toString(16).padStart(2, "0")}${(+g)
    .toString(16)
    .padStart(2, "0")}${(+b).toString(16).padStart(2, "0")}`;
};

export default convertRGBToHex;
