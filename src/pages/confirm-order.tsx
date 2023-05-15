// import '@/styles/globals.css'
import React, { useState } from 'react';
import { Nav } from "@/shared/components"
import { ItemSetter } from "@/shared/components/item/item-setter"
import Image from "next/image"
import { Form, Table, Modal, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { InfoCircleOutlined } from "@ant-design/icons";
type RequiredMark = boolean | 'optional';

const ConfirmOrder = () => {
    const menuFilter = (category: string) => {

    };
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState<RequiredMark>('optional');

    const onRequiredTypeChange = ({ requiredMarkValue }: { requiredMarkValue: RequiredMark }) => {
        setRequiredMarkType(requiredMarkValue);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    interface DataType {
        key: string;
        name: string;
        price: number;
        quantity: number;
        image: string;
    }

    const columns: ColumnsType<DataType> = [
        {
            title: '',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Sub Total',
            dataIndex: 'subtotal',
            key: 'subtotal',
            render: (_, record) => (
                record.quantity + " x " + record.price + " = " + (record.price * record.quantity).toLocaleString()
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div className='relative scale-75'>
                    <ItemSetter />
                </div>
            ),
        },
    ];
    const data: DataType[] = [
        {
            key: '1',
            name: 'Nasi gila',
            price: 25000,
            quantity: 1,
            image: "/images/signature.jpg",
        },
        {
            key: '2',
            name: 'Enchanté signature',
            price: 18000,
            quantity: 1,
            image: "/images/signature.jpg",
        },
        {
            key: '3',
            name: 'Chicken Karage Sambal Matah',
            price: 30000,
            quantity: 1,
            image: "/images/signature.jpg",
        },
        {
            key: '4',
            name: 'Ice Lychee Tea',
            price: 14000,
            quantity: 1,
            image: "/images/signature.jpg",
        },
    ];
    return (
        <div className='w-full'>
            <Nav menuFilter={menuFilter} categories={["Home", "Your Order", "Order History"]} selectedIndex={1} />
            <div className='relative mt-[120px] mx-auto pb-20'>
                <Table className='w-full p-5' pagination={{ disabled: true, hideOnSinglePage: true }} columns={columns} dataSource={data} summary={(pageData) => {
                    let total = 87000;

                    pageData.forEach((lala) => {
                        // total += subtotal;
                    });
                    return (
                        <Table.Summary fixed>
                            <Table.Summary.Row>
                                <Table.Summary.Cell index={0}>Total Price</Table.Summary.Cell>
                                <Table.Summary.Cell index={1}>{"Rp " + total.toLocaleString()}</Table.Summary.Cell>
                            </Table.Summary.Row>
                        </Table.Summary>
                    )
                }} />
                <hr></hr>
                <div className='max-w-lg md:max-w-4xl sm:max-w-lg lg:max-w-4xl mx-auto bg-white p-5 m-5'>
                    <h3>Please fill form below</h3>
                    <Form
                        form={form}
                        layout="vertical"
                        initialValues={{ requiredMarkValue: requiredMark }}
                        onValuesChange={onRequiredTypeChange}
                        requiredMark={requiredMark}
                    >
                        <Form.Item label="Name" required tooltip="This is a required field">
                            <Input placeholder="input your name" />
                        </Form.Item>
                        <Form.Item
                            label="Phone"
                            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                        >
                            <Input placeholder="input phone number" />
                        </Form.Item>
                        <Form.Item
                            label="Email"
                            tooltip={{ title: 'Tooltip with customize icon', icon: <InfoCircleOutlined /> }}
                        >
                            <Input placeholder="input your email" />
                        </Form.Item>
                    </Form>
                </div>
            </div>
            <button className='fixed bottom-0 bg-gold w-full text-white p-5 text-lg font-extrabold' onClick={showModal}>Proceed to Payment</button>
            <Modal width={350} open={isModalOpen} cancelText={'Back'} okButtonProps={{ className: 'bg-gold text-white' }} onOk={handleOk} onCancel={handleCancel}>
                <div className=''>
                    <h3>Input OTP</h3>
                    <Input placeholder="input OTP" className='w-32' />
                </div>
            </Modal>
        </div >
    )
}

export default ConfirmOrder



