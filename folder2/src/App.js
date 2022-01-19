import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from 'Routes';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'styles/theme';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import CssBaseline from '@mui/material/CssBaseline';
import Header from 'components/Header';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <div>
              <Header />
              <AppRoutes />
            </div>
          </Router>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
