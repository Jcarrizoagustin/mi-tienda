import { useEffect, useState } from 'react';
import Cart from './components/cart/Cart';
import { TotalContextProvider } from './context/TotalContextProvider';
import Header from './components/header/Header';
import ProductsContainer from './components/product/ProductsContainer';
import './App.css';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('hide-scrollbar', isOpen);
  }, [isOpen]);

  return (
    <div className='App'>
      <TotalContextProvider>
        <Cart isOpen={isOpen} handleClickIcon={setIsOpen} />
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            style={{
              width: '100vw',
              height: '100vh',
              zIndex: '50',
              position: 'fixed',
              top: '0',
              backgroundColor: 'rgba(20, 20, 19, 0.50)',
              transition: 'all .5s ease',
            }}
          ></div>
        )}

        <Header handleClickCart={setIsOpen} />
        <ProductsContainer />
        <Toaster
          position='bottom-left'
          reverseOrder={false}
          toastOptions={{
            style: {
              border: '1px solid #d52b1e',
              padding: '16px',
              color: '#d52b1e',
            },
          }}
        />
      </TotalContextProvider>
    </div>
  );
}
