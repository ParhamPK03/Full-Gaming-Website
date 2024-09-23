import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { LikedProductsProvider } from './Context/LikedProductsContext';
import { CartProvider } from './Context/CartContext';
import { AuthProvider } from './Context/AuthContext';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const element = useRoutes(routes);

  return (
    <AuthProvider>
      <LikedProductsProvider>
        <CartProvider>
          <div>
            {element}
            <ToastContainer theme="dark" />
          </div>
        </CartProvider>
      </LikedProductsProvider>
    </AuthProvider>
  );
}

export default App;
