// theme/index.js
import { createTheme } from '@mui/material/styles';
import palette from '@/styles/theme/palette';
import typography from '@/styles/theme/typography';
import breakpoints from '@/styles/theme/breakpoints';

const theme = createTheme({
  palette,
  typography,
  breakpoints,
});

export default theme;
