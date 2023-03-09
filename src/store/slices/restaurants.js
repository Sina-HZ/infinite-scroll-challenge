import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import restaurantsApi from "@api/restaurants/services";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchList",
  async (params, { rejectWithValue }) => {
    try {
      const response = await restaurantsApi.getRestaurants(params);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  items: [],
  isFetching: false,
  error: null,
};

export const restaurants = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
      const vendorItems = action.payload.data?.finalResult;
      state.items = state.items.concat(
        vendorItems.filter((el) => el.type === "VENDOR")
      );
      state.isFetching = false;
    });
    builder.addCase(fetchRestaurants.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(fetchRestaurants.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
  },
});

export const { addItem } = restaurants.actions;

export default restaurants.reducer;
