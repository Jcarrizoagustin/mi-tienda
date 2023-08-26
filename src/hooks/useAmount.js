import { useState } from "react";

export default function useAmount(value) {
  const [amount, setAmount] = useState(value || 1);

  const add = () => {
    setAmount((amount) => amount + 1);
  };

  const subtract = () => {
    if (amount > 1) {
      setAmount((amount) => amount - 1);
    }
  };

  return { amount, add, subtract };
}
