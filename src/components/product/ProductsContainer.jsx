import Product from './Product';
import styles from './ProductsContainer.module.css';
import { DATA } from '../../DATA';
function ProductsContainer() {
  return (
    <div className={styles.container}>
      {DATA.map(el => (
        <Product product={el} key={el.id} />
      ))}
    </div>
  );
}

export default ProductsContainer;
