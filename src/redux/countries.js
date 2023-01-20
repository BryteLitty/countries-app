import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const endpoint = 'https://restcountries.com/v2/all';
const initialState = {
  countries: [],
};



export const getCountries = createAsyncThunk('Countries-Of-The-World/getCountries', async () => {
  try {
    const res = await fetch('https://restcountries.com/v2/all')
      .then((data) => data.json());
    return res;
  } catch (error) {
    return error;
  }
});



const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCountries.fulfilled, (state, action) => ({
      ...state,
      countries: action.payload,
    }));
  },
});


export default countriesSlice.reducer;