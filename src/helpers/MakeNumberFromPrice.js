export const makeNumberFromPrice = stringPrise => {
  const price = parseInt(stringPrise.replace('$', ''));
  return price;
};
