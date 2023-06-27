import { forwardRef, useState } from "react";
import { Button } from "../UI/Button";

import { MinusCircle, PlusCircle } from "@phosphor-icons/react";

interface FormProps {
  id: string;
  onSubmitItem: (id: string) => void;
}

export const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ id, onSubmitItem }: FormProps, ref) => {
    const [amount, setAmount] = useState(1);

    const handleSubmitItem = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLFormElement;
      onSubmitItem(target.id);
    };

    const handleDecreaseItemAmount = () => {
      if (amount < 1) return setAmount(0);
      setAmount((amount) => amount - 1);
    };

    const handleIncreaseItemAmount = () => {
      setAmount((amount) => amount + 1);
    };
    return (
      <form onSubmit={handleSubmitItem} id={id} ref={ref}>
        <div className="amount--container">
          <Button
            id="remove"
            type="button"
            text="Remove item from order"
            customClasses="icon card"
            icon={<MinusCircle size={32} />}
            onClick={handleDecreaseItemAmount}
          />

          <input
            type="number"
            name="amount"
            id="amount"
            min={1}
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setAmount(Number(e.target.value))
            }
          />

          <Button
            id="add"
            type="button"
            text="Add item to order"
            customClasses="icon card"
            icon={<PlusCircle size={32} />}
            onClick={handleIncreaseItemAmount}
          />
        </div>
        <Button id="submit" type="submit" text="Add" customClasses="cta add" />
      </form>
    );
  }
);
