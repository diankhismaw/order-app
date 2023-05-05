import React, { useState } from 'react';
import Image from 'next/image'
import CategoryMenu from './category-menu'

export const Nav = ({ menuFilter }: { menuFilter: any }) => {
  const [scrolled, setScrolled] = useState(false);
  const categories = ['all', 'Coffee', 'Beverage', 'Main Course'];

  const filterItems = (category: string) => {
    menuFilter(category)
  };
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  };
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className={"navbar-custom py-2 flex shadow-md fixed top-0 w-full bg-white z-10 justify-center" + (scrolled == true ? ' h-15' : '')}>

        <section className="w-full m-auto">
          <div className={'text-center logo' + (scrolled ? ' scrolled logo-small h-7' : '')}>
            <div className='inline-flex h-18 w-64 shrink-0 items-center justify-center sm:h-18 sm:w-64'>
              <Image
                src='/images/logo.jpg'
                alt='Picture of the author'
                width={50}
                height={50}
              />
              <h2 className={'font-sans font-semibold text-2xl mt-3' + (scrolled ? ' logo-text-small' : '')}>Enchantè Coffee</h2>
            </div>
          </div>
          <CategoryMenu categories={categories} filterItems={filterItems} scrolled={scrolled} />
        </section>
      </div>

    </>
  )
}