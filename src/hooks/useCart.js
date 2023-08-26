import { useEffect, useState, useReducer } from "react";
import toast from "react-hot-toast";

export default function useCart() {
  const [productsReducer, dispatch] = useReducer(handleProductsReducer, []);
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const calcTotalReducer = (total, current) => total + current.subtotal;
  const calcSubtotalReducer = (subtotal, current) =>
    subtotal + current.amount * parseFloat(current.product.price);

  const addProductReducer = (product, amount) => {
    dispatch({
      type: "add_product",
      product: product,
      amount: amount
    });
  };

  const deleteProductReducer = (id) => {
    dispatch({
      type: "delete_product",
      id: id
    });
  };

  const incrementAmount = (id) => {
    dispatch({
      type: "increment_amount",
      id: id
    });
  };

  const decrementAmount = (id) => {
    dispatch({
      type: "decrement_amount",
      id: id
    });
  };

  const clearCart = () => {
    dispatch({
      type: "clear_cart"
    });
  };

  function handleProductsReducer(productsReducer, action) {
    switch (action.type) {
      case "add_product": {
        toast.success("Producto agregado");
        return [
          ...productsReducer,
          {
            id: action.product.id,
            product: action.product,
            amount: action.amount,
            subtotal: calcSubTotal(action.product, action.amount)
          }
        ];
      }
      case "delete_product": {
        toast.success("Producto eliminado");
        return [...productsReducer.filter((e) => e.product.id !== action.id)];
      }
      case "increment_amount": {
        return productsReducer.map((e) => {
          if (e.id === action.id) {
            return {
              ...e,
              amount: e.amount + 1,
              subtotal: calcSubTotal(e.product, e.amount + 1)
            };
          } else {
            return e;
          }
        });
      }
      case "decrement_amount": {
        return productsReducer.map((e) => {
          if (e.id === action.id) {
            if (e.amount > 1) {
              return {
                ...e,
                amount: e.amount - 1,
                subtotal: calcSubTotal(e.product, e.amount - 1)
              };
            } else {
              return e;
            }
          } else {
            return e;
          }
        });
      }
      case "clear_cart": {
        return [];
      }
      default: {
        console.log("Error");
      }
    }
  }

  useEffect(() => {
    setTotal(productsReducer.reduce(calcTotalReducer, 0));
    setSubtotal(productsReducer.reduce(calcSubtotalReducer, 0));
  }, [productsReducer]);

  function calcSubTotal(product, amount) {
    const price = parseFloat(product.price);
    if (product.discount) {
      return (price - (price * product.discount) / 100) * amount;
    }
    return price * amount;
  }

  return {
    productsReducer,
    addProductReducer,
    deleteProductReducer,
    incrementAmount,
    decrementAmount,
    clearCart,
    subtotal: subtotal.toFixed(2),
    total: total.toFixed(2)
  };
}
