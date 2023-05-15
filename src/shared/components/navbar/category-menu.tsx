import React, { useState } from 'react';
import Image from 'next/image'

interface Props {
    categories: string[],
    filterItems: (category: string) => void,
    scrolled: boolean,
    selectedIndex: number,
}
const CategoryMenu = ({ categories, filterItems, scrolled, selectedIndex }: Props) => {
    let [currentCategory, setCurrentCategory] = useState(selectedIndex);

    const handleCategoryClick = (categoryIndex: any, category: any) => {
        filterItems(category);
        setCurrentCategory(categoryIndex);
    };

    return (<div className='flex justify-center'>
        <div className='flex flex-initial'>
            <div className={(scrolled ? 'flexscrolled' : 'flex justify-center')}>
                {categories.map((category: any, index: any) => {
                    return (
                        <button
                            type="button"
                            className={`filter-btn ${index === currentCategory ? 'active' : ''
                                }`}
                            key={index}
                            onClick={() => handleCategoryClick(index, category)}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>
        </div>
    </div>
    );
};

export default CategoryMenu;
