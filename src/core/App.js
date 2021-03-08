import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Routes from './routes';

const axolotlTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#A0DDDE',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#F2FFE3',
    },
  },
  typography: {
    fontFamily: ['Poppins'].join(','),
    h1: {
      fontFamily: 'Handlee',
    },
    h3: {
      fontSize: '30px',
      fontWeight: '600',
    },
    h6: {
      fontSize: '30px',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={axolotlTheme}>
      <CssBaseline>
        <Routes />
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
