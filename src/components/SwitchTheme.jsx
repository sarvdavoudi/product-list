// components/ThemeSwitch.js
import { toggleTheme } from "@/redux/slices/themeSlice";
import Switch from "@mui/material/Switch";
import { useDispatch, useSelector } from "react-redux";

export const SwitchTheme = () => {
  const themeMode = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();
  const isLight = themeMode === "light";

  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  return <Switch checked={!isLight} onChange={handleToggle} color="primary" />;
};
