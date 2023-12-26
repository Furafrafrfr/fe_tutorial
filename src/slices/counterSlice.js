import { createSlice } from "@reduxjs/toolkit";

// これで/src/actions/counterActions.jsと/src/reducers/counterReducer.jsで定義したものすべてを定義できる。

export default createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    add: (state) => {
      state.count += 1;
    },
    addArbitrary: (state, action) => {
      state.count += action.payload;
    },
  },
});
