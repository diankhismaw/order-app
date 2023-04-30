import { ReactNode } from "react"

interface Props {
  imageSrc: string,
  alt: string,
  title: ReactNode,
  description: ReactNode,
  price: ReactNode,
}

export const Detail = ({imageSrc, alt, title, description, price}:Props) => {
  return (
    <div className="detail-list">
      <p>{title}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  )
}