import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Routes from './routes';
import themes from './themes';
import { SnackbarProvider } from 'notistack';
import store from './store';
import SocketProvider from './context/SocketContext';

import './App.css';
const App = () => {
  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        hideIconVariant
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        preventDuplicate
      >
        <Provider store={store}>
          <SocketProvider>
            <CssBaseline />
            <Routes />
          </SocketProvider>
        </Provider>
      </SnackbarProvider>

    </>


  );
};

export default App;
