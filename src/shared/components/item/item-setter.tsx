import React, { useState } from 'react';

export const ItemSetter = () => {
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
        <div>
            <div className='flex flex-row w-44 border-4 border-solid border-gold'>
                <div className='basis-1/4'><button className='bg-gold h-full w-full' onClick={handleDown}>-</button></div>
                <div className='basis-1/2 text-center'><p className='my-2'>{order} item</p></div>
                <div className='basis-1/4'><button className='bg-gold h-full w-full' onClick={handleUp}>+</button></div>
            </div>
        </div>
    )
}