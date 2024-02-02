// import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// const { getAllCarsThunk, getCarsThunk } = require('./fecth');

// const carsInitialState = {
//   cars: [],
//   allCars: [],
//   carsBrands: [],
//   isLoading: false,
//   error: null,
// };

// const handlePending = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

// const arrayOfActs = [getAllCarsThunk, getCarsThunk];

// const addStatusToActs = status => arrayOfActs.map(elem => elem[status]);

// const carsSlice = createSlice({
//   name: 'cars',
//   carsInitialState: carsInitialState,
//   extraRedusers: builder => {
//     builder
//       .addCase(getAllCarsThunk.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.allCars = payload;
//         state.carsBrands = makeUniqueBrandsState(payload);
//         state.error = null;
//       })
//       .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.cars = [...state.cars, ...payload];
//         state.error = null;
//       })
//       .addMatcher(isAnyOf(...addStatusToActs('pending')), handlePending)
//       .addMatcher(isAnyOf(...addStatusToActs('rejected')), handleRejected);
//   },
// });

// export const carReducer = carSlice.reducer;
