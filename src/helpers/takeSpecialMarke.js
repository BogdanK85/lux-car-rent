export const takeSpecialCarsMarke = payload => {
  const carMarkes = payload?.map(car => car.make);
  const specialMarkes = carMarkes.filter(
    (carMarke, index, array) => array.indexOf(carMarke) === index
  );
  const specialMarkesObject = [
    {
      value: 'all',
      label: 'All Markes',
    },
    ...specialMarkes.map(carMarke => {
      return { value: carMarke, label: carMarke };
    }),
  ];
  return specialMarkesObject;
};
