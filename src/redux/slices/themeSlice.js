const { createSlice } = require("@reduxjs/toolkit");

const themeSlice = createSlice({
  name: "theme",
  initialState: { mode: "dark" },
  reducers: {
    toggleTheme:(state)=> {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
