// import '@/styles/globals.css'
import React, { useState } from 'react';
import { Nav } from "@/shared/components"
import { ItemSetter } from "@/shared/components/item/item-setter"
import Image from "next/image"
import { Card, List } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined } from "@ant-design/icons";
type RequiredMark = boolean | 'optional';

const Payment = () => {
    const menuFilter = (category: string) => {

    };

    const data = [
        {
            title: 'Bayar di kasir',
        },
        {
            title: 'Gopay',
        },
        {
            title: 'OVO',
        },
        {
            title: 'BCA Virtual Account',
        },
        {
            title: 'Credit Card',
        },
        {
            title: 'Transfer bank',
        },
    ];
    return (
        <div className='w-full'>
            <Nav menuFilter={menuFilter} categories={["Home", "Your Order", "Order History"]} selectedIndex={1} />
            <div className='relative mt-[120px] mx-auto pb-20'>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 2,
                        md: 4,
                        lg: 4,
                        xl: 4,
                        xxl: 3,
                    }}
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <Card title=''>{item.title}</Card>
                        </List.Item>
                    )}
                />
            </div >
            <button className='fixed bottom-0 bg-gold w-full text-white p-5 text-lg font-extrabold'>Confirm Payment</button>
        </div >
    )
}

export default Payment



