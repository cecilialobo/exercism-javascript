 export const decodedValue = ([color1, color2]) => {
  const index1 = colors.indexOf(color1);
  const index2 = colors.indexOf(color2);

  const result = Number(`${index1}${index2}`);
  return result;
};

const colors = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]