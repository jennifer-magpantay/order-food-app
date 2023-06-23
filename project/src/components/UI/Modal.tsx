import { createPortal } from "react-dom";

interface ModalProps {
  isModalDisplayed: boolean;
  children: React.ReactNode;
}

export const Modal = ({ isModalDisplayed, children }: ModalProps) => {
  const modalDiv = document.querySelector("#modal");

  if (!isModalDisplayed) return null;

  if (modalDiv) {
    return createPortal(
      <>
        <div className="modal--overlay" />
        <div className="modal">{children}</div>
      </>,
      modalDiv
    );
  }
};
