
import { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "..";
import { ModalContent } from "../modal";

interface Props{
  title: ReactNode,
  price: ReactNode,
  imageSrc: string,
  alt: string
}
export const ModalTrigger = ({title, price, imageSrc, alt}:Props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setShowModal(true)}> Yuk Order</Button>
      {/* <button onClick={() => setShowModal(true)}>
        Yuk order
      </button> */}
      {showModal && createPortal(
        <ModalContent 
          title={title} 
          price={price}
          imageSrc={imageSrc}
          alt={alt}
          onClose={() => setShowModal(false)}
        />,
        document.body
      )}
    </>
  )
}
