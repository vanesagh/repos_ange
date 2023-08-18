import '@/styles/globals.css'
import localFont from 'next/font/local'

import { createTheme, ThemeProvider } from '@mui/material';


const borel = localFont({
  src: './Borel-Regular.ttf',
  weight: '400',

})

const theme = createTheme({
  typography: {
    fontFamily: borel,
  }
});

const globalFontStyle = `
@font-face {
  font-family: 'Borel', cursive;
  src:url(${'./Borel-Regular.ttf'});
}
`;

theme.overrides = {
  MuiCssBaseline: {
    '@global': {
      '@font-face': [globalFontStyle],
    },
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>

      <link href="https://fonts.googleapis.com/css2?family=Borel&family=Preahvihear&family=Shadows+Into+Light&display=swap" rel="stylesheet"></link>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

      </ThemeProvider>




    </>);

}
