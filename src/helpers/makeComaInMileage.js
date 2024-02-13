export const makeComaInMileage = mileage => {
  const lengthMileage = mileage.toString().length;
  if (lengthMileage <= 3) {
    return mileage;
  }
  const mileageStringArr = mileage.toString().split('');
  mileageStringArr.splice(lengthMileage - 3, 0, ',');
  return mileageStringArr.join('');
};
