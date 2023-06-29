import { createPortal } from "react-dom";
import { useContext } from "react";
import { OrdersContext } from "../../store/ordersContext";
import { calculateSubtotal } from "../../helpers/subtotal";

import { Button } from "./Button";

import { X } from "@phosphor-icons/react";

interface ModalProps {
  isModalDisplayed: boolean;
  children: React.ReactNode;
  title: string;
}

export const Modal = ({ isModalDisplayed, title, children }: ModalProps) => {
  const context = useContext(OrdersContext);
  const { modalDisplay, orders } = context;

  const modalDiv = document.querySelector("#modal");

  const handleModalDisplay = () => {
    modalDisplay();
  };

  const handleCheckout = () => {
    modalDisplay();
  };

  if (!isModalDisplayed) return null;

  const modal = (
    <div className="modal">
      <div className="modal--header">
        <h3>{title}</h3>
        <Button
          id="close-modal"
          type="button"
          text="Close modal"
          customClasses="icon"
          icon={<X size={32} />}
          onClick={handleModalDisplay}
        />
      </div>
      <div className="modal--body">{children}</div>
      {orders.length !== 0 && (
        <div className="modal--footer">
          <Button
            id="checkout"
            type="button"
            text="Proceed to checkout"
            customClasses="cta center"
            onClick={handleCheckout}
          />
        </div>
      )}
    </div>
  );

  if (modalDiv) {
    return createPortal(
      <>
        <div className="modal--overlay" />
        {modal}
      </>,
      modalDiv
    );
  }
};
