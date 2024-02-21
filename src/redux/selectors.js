export const selectCars = state => state.cars.cars;
export const selectAllCars = state => state.cars.allCars;
export const selectCarsBrands = state => state.cars.carsBrands;
export const selectIsLoading = state => state.cars.isLoading;
export const selecError = state => state.cars.error;

export const selectFavoriteCars = state => state.favoriteCars.favorites;

export const selectFilter = state => state.filter.filter;
export const selectFilterCars = state => state.filter.filterCars;
