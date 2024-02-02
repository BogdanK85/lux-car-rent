// import axios from 'axios';

// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://65bbb85152189914b5bcf1b1.mockapi.io';

// export const LIMIT = 12;

// const getAllCars = async (_, thunkAPI) => {
//   try {
//     const response = await axios.get('/adverts');
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// };

// const getCars = async (_, thunkAPI) => {
//   try {
//     const response = await axios.get(`/adverts?page=${page}&limit=${LIMIT}`);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// };

// export const getCarsThunk = createAsyncThunk('cars/getCars', getCars);

// export const getAllCarsThunk = createAsyncThunk('cars/getAllCars', getAllCarss);
