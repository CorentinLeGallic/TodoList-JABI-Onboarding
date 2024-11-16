import React, { useRef } from 'react';
import useModalStore from '../zustand/useModalStore';

const ModalOverlay = ({ children }) => {

    const { hideModal } = useModalStore();

    // Create a reference for the overlay element
    const overlay = useRef();

    // Close the modal if the overlay is clicked
    const handleOverlayClick = (e) => {
        if (e.target === overlay.current) {
            hideModal();
        }
    }

    return (
        <div ref={overlay} className="modal-overlay" onClick={handleOverlayClick}>
            {children}
        </div>
    );
}

export default ModalOverlay;