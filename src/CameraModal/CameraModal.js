import React from "react";
import { Layer } from "grommet";

const CameraModal = ({ children, onClose }) => {
  return (
    <Layer position="center" modal onClickOutside={onClose} onEsc={onClose}>
      {children}
    </Layer>
  );
};

export default CameraModal;
