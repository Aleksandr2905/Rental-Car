export const createOptions = arr => {
  const options = arr.map(option => ({
    value: option,
    label: option,
  }));
  return options;
};

export const sortByMakes = arr => {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
};

let priceArr = [];

const priceOptions = () => {
  for (let i = 10; i < 100; i += 10) {
    priceArr.push(i);
  }
  return priceArr;
};
priceOptions();
export { priceArr };
