import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './app/UserContext/UserContext';
import { store } from './app/store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-3ivz2lavdv3bjy5d.us.auth0.com"
    clientId="i6Emcp030e1VFxsV1ENnaY6XyOvCznaA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <ChakraProvider>
          <App />
          </ChakraProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
    </Auth0Provider>
  </React.StrictMode>
);