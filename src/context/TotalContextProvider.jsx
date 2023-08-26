import { createContext } from 'react';
import useCart from '../hooks/useCart';

const TotalContext = createContext({});

export function TotalContextProvider({ children }) {
  const {
    productsReducer,
    addProductReducer,
    deleteProductReducer,
    incrementAmount,
    decrementAmount,
    clearCart,
    subtotal,
    total,
  } = useCart();
  return (
    <TotalContext.Provider
      value={{
        productsReducer,
        addProductReducer,
        deleteProductReducer,
        incrementAmount,
        decrementAmount,
        clearCart,
        subtotal,
        total,
      }}
    >
      {children}
    </TotalContext.Provider>
  );
}

export default TotalContext;
