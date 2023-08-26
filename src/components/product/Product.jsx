import { useContext } from 'react';
import TotalContext from '../../context/TotalContextProvider';
import useAmount from '../../hooks/useAmount';
import styles from './Product.module.css';
import { UilCheck } from '@iconscout/react-unicons';
import toast from 'react-hot-toast';
function Product({ product }) {
  const { amount, add, subtract } = useAmount();
  const { productsReducer, addProductReducer } = useContext(TotalContext);

  const calcNewPrice = (price, discount) => {
    const double = parseFloat(price);
    return double - (discount * double) / 100;
  };

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={product.image} alt='' />
      </div>
      <div className={styles.header}>
        <h3 className={styles.brand}>{product.brand}</h3>
        <h2 className={styles.title}>{product.name}</h2>
      </div>
      <div className={styles.offerts}>
        {product.discount && (
          <span className={styles.offert}>{product.discount}%</span>
        )}
        {product.offert && (
          <span className={styles.offert}>{product.offert}</span>
        )}
      </div>
      <div className={styles.prices}>
        {product.discount ? (
          <span className={styles.price}>
            $ {calcNewPrice(product.price, product.discount)}
          </span>
        ) : (
          <span className={styles.price}>$ {product.price}</span>
        )}
        {product.discount && (
          <span className={styles.oldPrice}>$ {product.price}</span>
        )}
      </div>
      <div className={styles.buttons}>
        <div className={`${styles.btn} ${styles.btnAmount}`}>
          <span onClick={subtract} className={styles.control}>
            -
          </span>
          {amount}
          <span onClick={add} className={styles.control}>
            +
          </span>
        </div>
        {!productsReducer.some(e => e.id === product.id) ? (
          <div
            onClick={() => addProductReducer(product, amount)}
            className={`${styles.btn} ${styles.btnAdd}`}
          >
            Agregar
          </div>
        ) : (
          <div
            onClick={() =>
              toast.error('El producto ya se encuentra en el carrito')
            }
            className={`${styles.btn} ${styles.btnAdd}`}
          >
            <UilCheck />
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
