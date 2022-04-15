import React, { useState, useEffect, useRef } from "react";

import "./modal.scss";

const Modal = (props: any) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

type ModalPropTypes = {
  active: boolean;
  id: string;
  onClose: () => void;
  children: React.ReactNode;
};

export const ModalContent = (props: ModalPropTypes) => {
  const contentRef = useRef<any | null>(null);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) props.onClose();
  };

  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

export default Modal;
