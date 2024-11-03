// components/ThemeSwitch.js
import React, { useContext } from "react";
import Switch from "@mui/material/Switch";
import { ThemeContext } from "@/styles/theme";

export const SwitchTheme = () => {
  const { toggleTheme , isLight} = useContext(ThemeContext);
  console.log('Current Theme:', isLight ? 'Light' : 'Dark');

  return (
    <Switch
      checked={!isLight} // Checked state is inverted for dark mode
      onChange={toggleTheme} // Call toggleTheme on switch change
      color="primary"
      inputProps={{ "aria-label": "Toggle theme" }}
    />
  );
};
