import React, { useState, useContext, useEffect } from "react";
import { OrdersContext } from "../../store/ordersContext";

import { Button } from "../UI/Button";

import { MinusCircle, PlusCircle } from "@phosphor-icons/react";

interface InputCounterProps {
  itemAmount: number;
  itemId: string;
}
export const InputCounter = ({ itemAmount, itemId }: InputCounterProps) => {
  const { manageAmount, setAmount } = useContext(OrdersContext);

  const handleManageItemAmount = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLButtonElement;
    manageAmount(target.id, itemId);
  };

  const handleSetAmountChange = (e: React.ChangeEvent) => {
    const amount = e.target as HTMLInputElement;
    setAmount(Number(amount.value), itemId);
  };

  return (
    <div className="counter--container">
      <Button
        id="decrease"
        type="button"
        text="Remove item from order"
        customClasses="icon card"
        icon={<MinusCircle size={32} />}
        dataId={itemId}
        onClick={(e) => handleManageItemAmount(e)}
      />

      <input
        type="number"
        name="amount"
        id="amount"
        min={0}
        value={itemAmount}
        onChange={(e) => handleSetAmountChange(e)}
      />

      <Button
        id="increase"
        type="button"
        text="Add item to order"
        customClasses="icon card"
        icon={<PlusCircle size={32} />}
        dataId={itemId}
        onClick={(e) => handleManageItemAmount(e)}
      />
    </div>
  );
};
