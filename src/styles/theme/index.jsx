// theme/index.js
import { createTheme } from '@mui/material/styles';
import palette, { darkModePalette, lightModePalette } from '@/styles/theme/palette';
import typography from '@/styles/theme/typography';
import breakpoints from '@/styles/theme/breakpoints';


const lightTheme = createTheme({
  palette: lightModePalette,
  typography,
  breakpoints,
});

const darkTheme = createTheme({
  palette: darkModePalette,
  typography,
  breakpoints,
});
export { lightTheme, darkTheme };
