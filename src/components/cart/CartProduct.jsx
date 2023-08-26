import sytles from './CartProduct.module.css';
import useAmount from '../../hooks/useAmount.js';
import { UilTrashAlt } from '@iconscout/react-unicons';

export default function CartProduct({
  item,
  handleDeleteProduct,
  handleIncrement,
  handleDecrement,
}) {
  const { amount, add, subtract } = useAmount(item.amount);

  const calcTotal = product => {
    const price = parseFloat(product.price);
    return (price * amount).toFixed(2);
  };
  return (
    <div className={sytles.cartProduct}>
      <div className={sytles.imgContainer}>
        <img src={item.product.image} alt='' />
      </div>
      <div className={sytles.productCartBody}>
        <span className={sytles.title}>{item.product.name}</span>
        <div className={sytles.bodyFooter}>
          <div className={sytles.productCartBtn}>
            <span
              onClick={() => {
                subtract();
                handleDecrement(item.product.id);
              }}
              className={sytles.btn}
            >
              -
            </span>
            {amount}
            <span
              onClick={() => {
                add();
                handleIncrement(item.product.id);
              }}
              className={sytles.btn}
            >
              +
            </span>
          </div>
          <div className={sytles.prices}>
            {item.product.discount && (
              <span className={sytles.oldPrice}>
                $ {calcTotal(item.product)}
              </span>
            )}
            <span className={sytles.price}>$ {item.subtotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
      <UilTrashAlt
        onClick={() => handleDeleteProduct(item.product.id)}
        className={sytles.trashIcon}
      />
    </div>
  );
}
