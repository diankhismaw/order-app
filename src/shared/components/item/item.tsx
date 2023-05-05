import Image from "next/image"
import React, { useState } from 'react';
import { ModalTrigger } from "..";


interface Props {
  imageSrc: string,
  id: number,
  title: string,
  description: string,
  price: number,
}


export const Item = ({ id, description, imageSrc, price, title }: Props) => {
  const [order, setOrder] = useState(0);
  const handleDown = () => {
    if (order > 0) {
      setOrder(order - 1)
    }
  }
  const handleUp = () => {
    if (order < 20) {
      setOrder(order + 1)
    }
  }
  return (
    <div className="flex justify-between p-5 shadow-md mb-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-y-3 gap-x-3 w-full max-w-4xl">
        <div className='block h-60 box-content rounded border-4 border-solid border-gold p-2'>
          <Image
            src={imageSrc}
            alt={title}
            width={250}
            height={150}
            className='rounded w-full h-60 object-cover' />
        </div>
        <div className='relative h-40 sm:h-40 md:h-full lg:h-full'>
          <article key={"lala"} className="grid gap-x-1 gap-y-2 max-w-lg">
            <div className="item-info">
              <header className='font-semibold flex justify-between border-dotted border-gray-400 border-b'>
                <h4 className='mb-2'>{title}</h4>
                <h4 className='text-gold'>Rp {price?.toLocaleString()}</h4>
              </header>
              <p className='pt-4'>{description}</p>
            </div>
          </article>
          <div className='absolute bottom-0 right-0'>
            <div className='flex flex-row w-44 border-4 border-solid border-gold'>
              <div className='basis-1/4'><button className='bg-gold h-full w-full' onClick={handleDown}>-</button></div>
              <div className='basis-1/2 text-center'><p className='my-2'>{order} item</p></div>
              <div className='basis-1/4'><button className='bg-gold h-full w-full' onClick={handleUp}>+</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}