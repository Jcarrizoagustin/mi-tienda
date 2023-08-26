import styles from './Header.module.css';
import { UilShoppingCartAlt } from '@iconscout/react-unicons';
import { useContext } from 'react';

import TotalContext from '../../context/TotalContextProvider';

export default function Header({ handleClickCart }) {
  const { total, productsReducer } = useContext(TotalContext);
  return (
    <header className={styles.header}>
      <h2>Mi Tienda</h2>
      <div onClick={() => handleClickCart(true)} className={styles.cart}>
        <UilShoppingCartAlt />
        <span>$ {total}</span>
        <span className={styles.productsAmount}>{productsReducer.length}</span>
      </div>
    </header>
  );
}
