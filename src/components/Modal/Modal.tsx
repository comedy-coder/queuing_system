import React, { useState, useEffect, useRef } from "react";

import "./modal.scss";

const Modal = (props: any) => {
  return (
    <div className={`modal ${props.show ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

export const ModalHeader = (props: any) => {
  return <div className="modal-header">{props.children}</div>;
};
export const ModalBody = (props: any) => {
  return <div className="modal-body">{props.children}</div>;
};
export const ModalFooter = (props: any) => {
  return <div className="modal-footer">{props.children}</div>;
};

export default Modal;
