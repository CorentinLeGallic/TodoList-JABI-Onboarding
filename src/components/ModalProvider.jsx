import React, { cloneElement, useEffect, useState } from 'react';
import useModalStore from '../zustand/useModalStore';
import { useTransition } from 'react-spring';

const ModalProvider = ({ children }) => {

    const { modal } = useModalStore();

    const modalTransition = useTransition(modal, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: {
            duration: 150
        }
    })

  return (
    <>
        {children}
        {modalTransition((style, item) =>
            item && cloneElement(item, { style: { ...item.props.style, ...style } })
        )}
    </>
  );
}

export default ModalProvider;