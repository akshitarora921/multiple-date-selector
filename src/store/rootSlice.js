import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    data: {
      date1: "2020-11-04",
      date2: "2020-11-05",
      date3: "2020-11-06",
      date4: "2020-11-07",
      date5: "2020-11-08",
      date6: "2020-11-09",
      date7: "2020-11-10",
    },
  },
  reducers: {
    setData: (state, action) => {
      console.log("yesss", action.payload);
      state.data = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;
export const { setData } = rootSlice.actions;
