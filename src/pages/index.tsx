// import '@/styles/globals.css'
import React, { useState } from 'react';
import { FloatingPrice, Item, Nav } from "@/shared/components"


const Home = () => {
  const items = [
    {
      title: 'Echante Signature',
      description: 'Kopi susu dan gula aren racikan khas Echante Coffee',
      price: 25000,
      category: 'Coffee',
      id: 1,
      imageSrc: '/images/signature.jpg'
    },
    {
      title: 'Enchante Hampers',
      description: 'Hampers special edisi lebaran dari Echante Coffee',
      price: 225000,
      category: 'Beverage',
      id: 2,
      imageSrc: '/images/hampers.jpg'
    },
    {
      title: 'Echante Signature',
      description: 'Kopi susu dan gula aren racikan khas Echante Coffee',
      price: 25000,
      category: 'drink',
      id: 3,
      imageSrc: '/images/signature.jpg'
    },
    {
      title: 'Enchante Hampers',
      description: 'Hampers special edisi lebaran dari Echante Coffee',
      price: 300000,
      category: 'Coffee',
      id: 4,
      imageSrc: '/images/hampers.jpg'
    },
    {
      title: 'Echante Signature',
      description: 'Kopi susu dan gula aren racikan khas Echante Coffee',
      price: 25000,
      category: 'Beverage',
      id: 5,
      imageSrc: '/images/signature.jpg'
    },
    {
      title: 'Enchante Hampers',
      description: 'Hampers special edisi lebaran dari Echante Coffee',
      price: 225000,
      category: 'Main Course',
      id: 6,
      imageSrc: '/images/hampers.jpg'
    },
    {
      title: 'Echante Signature',
      description: 'Kopi susu dan gula aren racikan khas Echante Coffee',
      price: 25000,
      category: 'Main Course',
      id: 7,
      imageSrc: '/images/signature.jpg'
    },
    {
      title: 'Enchante Hampers',
      description: 'Hampers special edisi lebaran dari Echante Coffee',
      price: 300000,
      category: 'drink',
      id: 8,
      imageSrc: '/images/hampers.jpg'
    }
  ]
  const [menuItems, setMenuItems] = useState(items);
  const menuFilter = (category: string) => {
    if (category == 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <div className='w-full'>
      <Nav menuFilter={menuFilter} />
      <div className='relative mt-[120px] max-w-lg md:max-w-4xl sm:max-w-lg lg:max-w-4xl mx-auto pb-20'>
        {menuItems.map((item) => <Item key='i' {...item} />)}
      </div>
      <FloatingPrice />
    </div>
  )
}

export default Home



