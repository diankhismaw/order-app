// import '@'
import { useEffect, useRef } from 'react';

const KitchenDisplay = () => {
    let orders = [
        {
            sequence: 1,
            status: "Done",
            order_list: [{ name: "Enchanté Signature", qty: 2 }, { name: "French Fries", qty: 1 }],
            table: 4
        },
        {
            sequence: 2,
            status: "Done",
            order_list: [{ name: "Mineral Water", qty: 2 }, { name: "Nasi Gila", qty: 1 }, { name: "Chicken Karage Sambal Matah", qty: 1 }],
            table: 3
        },
        {
            sequence: 3,
            status: "In Progress",
            order_list: [{ name: "Chicken Karage Sambal Matah", qty: 2 }, { name: "Pinna Colada", qty: 2 }],
            table: 9
        },
        {
            sequence: 4,
            status: "In Progress",
            order_list: [{ name: "Matcha Latte", qty: 2 }, { name: "Hot Latte", qty: 1 }],
            table: 12
        },
        {
            sequence: 5,
            status: "In Progress",
            order_list: [{ name: "Lotus Biscoff Milk", qty: 1 }, { name: "Lemon Tea", qty: 1 }],
            table: 7
        },
        {
            sequence: 6,
            status: "In Progress",
            order_list: [{ name: "Nasi Gila", qty: 1 }, { name: "Hot Latte", qty: 1 }],
            table: 1
        },
        {
            sequence: 7,
            status: "In Progress",
            order_list: [{ name: "Lotus Biscoff Milk", qty: 1 }, { name: "Lemon Tea", qty: 1 }],
            table: 14
        },
        {
            sequence: 8,
            status: "In Progress",
            order_list: [{ name: "Nasi Gila", qty: 1 }, { name: "Hot Latte", qty: 1 }],
            table: 5
        },
        {
            sequence: 9,
            status: "In Progress",
            order_list: [{ name: "Lotus Biscoff Milk", qty: 1 }, { name: "Lemon Tea", qty: 1 }],
            table: 11
        },
        {
            sequence: 10,
            status: "In Progress",
            order_list: [{ name: "Nasi Gila", qty: 1 }, { name: "Hot Latte", qty: 1 }],
            table: 2
        },
    ]
    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-4 m-5">
            {orders.map((order) => {
                return (
                    <div className="col-span-1 row-span-1" key={order.sequence}>
                        <div className={"bg-white rounded-md shadow-md h-full p-4 " + (order.status == "Done" ? "bg-lime-100" : "")}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-medium">Order #{order.sequence}</h3>
                                <button className="text-sm font-medium border-2 border-lime-400 rounded-lg p-1 px-3">{order.status}</button>
                            </div>
                            <p className="text-sm mt-2">{order.order_list.map((item) => {
                                return (item.qty + " x " + item.name + ", ")
                            })}</p>
                            <p className="text-sm mt-1">Table #{order.tablegit}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default KitchenDisplay



