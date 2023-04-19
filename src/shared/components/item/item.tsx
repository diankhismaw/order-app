import Image from "next/image"
import { ReactNode } from "react"
import { ModalNote } from ".."


interface Props {
  imageSrc: string,
  alt: string,
  title: ReactNode,
  description: ReactNode,
  price: ReactNode,
}
export const Item = ({alt, description, imageSrc, price, title, }:Props) => {
  return (
    <div className="flex justify-between p-5 shadow-md mb-3">
      <div className="wrap-item flex justify-between">
        <Image
          src={imageSrc}
          alt={alt}
          width={50}
          height={50}
        />
        <div className="desc-info">
          <p className="title">{title}</p>
          <p className="desc">{description}</p>
          <p className="price">Rp.{price}</p>
        </div>
      </div>
      <div className="qty">
        <div className="counter">
          <span>-</span>
          <input type="number" />
          <span>+</span>
        </div>
        <div className="notes">
          <ModalNote triggerLabel={description}/>
        </div>
      </div>
    </div>
  )
}