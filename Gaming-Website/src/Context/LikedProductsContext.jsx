import React, { createContext, useState, useEffect, useContext } from 'react';

const LikedProductsContext = createContext();

export const LikedProductsProvider = ({ children }) => {
  const [likedProducts, setLikedProducts] = useState([]);

  // Load liked products from localStorage when the component mounts
  useEffect(() => {
    const storedLikedProducts = localStorage.getItem('likedProducts');
    if (storedLikedProducts) {
      setLikedProducts(JSON.parse(storedLikedProducts));
    }
  }, []);

  // Save liked products to localStorage whenever the likedProducts state changes
  useEffect(() => {
    if (likedProducts.length > 0) {
      localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
    } else {
      localStorage.removeItem('likedProducts'); // Remove if empty
    }
  }, [likedProducts]);

  // Add product to liked list if it doesn't already exist
  const addLikedProduct = (product) => {
    setLikedProducts((prevLikedProducts) => {
      if (!prevLikedProducts.some((p) => p.id === product.id)) {
        return [...prevLikedProducts, product];
      }
      return prevLikedProducts;
    });
  };

  // Remove product from liked list
  const removeLikedProduct = (productId) => {
    setLikedProducts((prevLikedProducts) =>
      prevLikedProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <LikedProductsContext.Provider value={{ likedProducts, addLikedProduct, removeLikedProduct }}>
      {children}
    </LikedProductsContext.Provider>
  );
};

export const useLikedProducts = () => useContext(LikedProductsContext);
