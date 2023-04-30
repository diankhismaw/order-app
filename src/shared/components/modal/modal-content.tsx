import Image from "next/image";
import { ReactNode, useState } from "react";
import { Button } from "..";

interface PropsContent {
  onClose: () => void,
  title: ReactNode,
  imageSrc: string,
  alt: string,
  price: ReactNode
}
export const ModalContent = ({onClose, title, imageSrc, price, alt}:PropsContent) => {
  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
 
  //reset counter 
  const reset = () =>{
    setCounter(0)
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="flex justify-between">
          <Image
            src={imageSrc}
            alt={alt}
            width={50}
            height={50}
          />
          <div className="desc-info">
            <p className="title">{title}</p>
            <p className="price">Rp.{price}</p>
          </div>
          <div className="counter">
            <span className="counter__output">{counter}</span>
            <div className="btn__container">
              <button className="control__btn" onClick={increase}>+</button>
              <button className="control__btn" onClick={decrease}>-</button>
              <button className="reset" onClick={reset}>Reset</button>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          {/* <button onClick={onClose}>Close</button> */}
          <Button type="primary" onClick={onClose} >Close</Button>
        </div>
      </div>
    </div>
  );
}
