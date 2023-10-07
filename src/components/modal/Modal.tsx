import React, { FC, ReactNode, memo } from "react";
import { CloseModal, ModalContainer, ModalOverlay } from "./modal.style";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<IModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay  data-testid="Modal-component">
      <ModalContainer>
        <CloseModal onClick={onClose}>X</CloseModal>
        {children}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default memo(Modal);
