import React from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  width: '40%',
  maxWidth: '1300px',
  maxHeight: '1000px',
  height: '40%',
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "15vh",
  zIndex: 1000,
  border: "0.6vh solid #f5821f",
  borderRadius: "4vh",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1000,
};

const BUTTON_STYLES = {
  color: "white",
  backgroundColor: "red",
  borderRadius: "50%",
  top: "0",
  right: "0",
  marginTop: "1vh",
  marginRight: "2vh",
  position: "absolute",
  fontSize: "2vw",
  cursor: "pointer",
};

const basicPortal = (onClose, open, children, modalName) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}></div>
      <div style={MODAL_STYLES}>
        <button
          style={BUTTON_STYLES}
          onClick={onClose}
        >
          x
        </button>
        {children}
      </div>
    </>,
    document.getElementById(modalName)
  );
};

export const Modal = ({ onClose, open, children, dummy }) =>
  basicPortal(onClose, open, children, dummy);
export const ModalHelp = ({ onClose, open, children, help }) =>
  basicPortal(onClose, open, children, help);
