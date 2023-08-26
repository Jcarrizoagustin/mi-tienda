import styles from './Cart.module.css';
import CartProduct from './CartProduct';
import { useContext } from 'react';
import TotalContext from '../../context/TotalContextProvider';
import { UilTrashAlt, UilMultiply } from '@iconscout/react-unicons';

export default function Cart({ isOpen, handleClickIcon }) {
  const {
    productsReducer,
    deleteProductReducer,
    incrementAmount,
    decrementAmount,
    clearCart,
    subtotal,
    total,
  } = useContext(TotalContext);
  return (
    <div className={`${styles.cart} ${isOpen && styles.show}`}>
      <div className={styles.cartHeader}>
        <span>Carrito</span>
        <UilMultiply
          className={styles.closeIcon}
          onClick={() => handleClickIcon(false)}
        />
      </div>
      {productsReducer.length > 0 ? (
        <>
          <div className={styles.cartProducts}>
            {productsReducer.map(item => (
              <CartProduct
                item={item}
                key={item.id}
                handleDeleteProduct={deleteProductReducer}
                handleIncrement={incrementAmount}
                handleDecrement={decrementAmount}
              />
            ))}
          </div>
          <div className={styles.cartFooter}>
            <div className={styles.cartFooterLine}>
              <span>Subtotal</span>
              <span>$ {subtotal}</span>
            </div>
            <div
              className={`${styles.cartFooterLine} ${styles.cartFooterLineRed}`}
            >
              <span>Descuentos</span>
              <span>- $ {(subtotal - total).toFixed(2)}</span>
            </div>
            <div className={styles.cartFooterLine}>
              <span>Entrega</span>
              <span>GRATIS</span>
            </div>
            <div className={styles.cartFooterTotalLine}>
              <span>Total</span>
              <span>$ {total}</span>
            </div>
            <div className={styles.cartFooterText}>
              <span className={styles.cartFooterTextRed}>
                Monto mínimo de compra $2000
              </span>
              <p>
                *En el caso de pesables en tu compra, los mismos podrán sufrir
                cambios.
              </p>
            </div>
            {total < 2000 ? (
              <button
                onClick={() => alert('Pago')}
                className={`${styles.cartFooterBtn} ${styles.cartFooterBtnDisable}`}
                disabled
              >
                Ir al pago
              </button>
            ) : (
              <button
                onClick={() => alert('Pago')}
                className={`${styles.cartFooterBtn} ${styles.cartFooterBtnEnable}`}
              >
                Ir al pago
              </button>
            )}
            <div onClick={() => clearCart()} className={styles.crashIcon}>
              <UilTrashAlt /> <span>Vaciar carrito</span>
            </div>
          </div>
        </>
      ) : (
        <h2 style={{ marginTop: 'calc(100vh / 2)' }}>
          No hay productos en el carrito
        </h2>
      )}
    </div>
  );
}
