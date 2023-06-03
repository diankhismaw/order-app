// import '@/styles/globals.css'
import React, { useState } from 'react';

const ManageOrder = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
                <div className="flex items-center justify-between bg-gray-200 px-4 py-2">
                    <h2 className="text-lg font-medium">Kitchen Orders</h2>
                    <p className="text-sm font-medium">View All</p>
                </div>
                <div className="overflow-y-scroll max-h-96">
                    <ul className="divide-y divide-gray-300">
                        <li className="py-3 px-4">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2">
                                    <h3 className="text-lg font-medium">Order #001</h3>
                                </div>
                                <div className="col-span-1 text-right">
                                    <p className="text-sm font-medium">In Progress</p>
                                </div>
                            </div>
                            <p className="text-sm mt-2">2 x Cheeseburgers, 1 x Fries, 1 x Coke</p>
                            <p className="text-sm mt-1">Table #5</p>
                        </li>
                        <li className="py-3 px-4">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2">
                                    <h3 className="text-lg font-medium">Order #002</h3>
                                </div>
                                <div className="col-span-1 text-right">
                                    <p className="text-sm font-medium">Ready</p>
                                </div>
                            </div>
                            <p className="text-sm mt-2">1 x Salad, 1 x Chicken Alfredo</p>
                            <p className="text-sm mt-1">Table #10</p>
                        </li>
                        <li className="py-3 px-4">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2">
                                    <h3 className="text-lg font-medium">Order #002</h3>
                                </div>
                                <div className="col-span-1 text-right">
                                    <p className="text-sm font-medium">Ready</p>
                                </div>
                            </div>
                            <p className="text-sm mt-2">1 x Salad, 1 x Chicken Alfredo</p>
                            <p className="text-sm mt-1">Table #10</p>
                        </li>
                        <li className="py-3 px-4">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2">
                                    <h3 className="text-lg font-medium">Order #002</h3>
                                </div>
                                <div className="col-span-1 text-right">
                                    <p className="text-sm font-medium">Ready</p>
                                </div>
                            </div>
                            <p className="text-sm mt-2">1 x Salad, 1 x Chicken Alfredo</p>
                            <p className="text-sm mt-1">Table #10</p>
                        </li>
                        <li className="py-3 px-4">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2">
                                    <h3 className="text-lg font-medium">Order #002</h3>
                                </div>
                                <div className="col-span-1 text-right">
                                    <p className="text-sm font-medium">Ready</p>
                                </div>
                            </div>
                            <p className="text-sm mt-2">1 x Salad, 1 x Chicken Alfredo</p>
                            <p className="text-sm mt-1">Table #10</p>
                        </li>
                        <li className="py-3 px-4">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2">
                                    <h3 className="text-lg font-medium">Order #002</h3>
                                </div>
                                <div className="col-span-1 text-right">
                                    <p className="text-sm font-medium">Ready</p>
                                </div>
                            </div>
                            <p className="text-sm mt-2">1 x Salad, 1 x Chicken Alfredo</p>
                            <p className="text-sm mt-1">Table #10</p>
                        </li>
                        <li className="py-3 px-4">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2">
                                    <h3 className="text-lg font-medium">Order #002</h3>
                                </div>
                                <div className="col-span-1 text-right">
                                    <p className="text-sm font-medium">Ready</p>
                                </div>
                            </div>
                            <p className="text-sm mt-2">1 x Salad, 1 x Chicken Alfredo</p>
                            <p className="text-sm mt-1">Table #10</p>
                        </li>
                        <li className="py-3 px-4">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2">
                                    <h3 className="text-lg font-medium">Order #002</h3>
                                </div>
                                <div className="col-span-1 text-right">
                                    <p className="text-sm font-medium">Ready</p>
                                </div>
                            </div>
                            <p className="text-sm mt-2">1 x Salad, 1 x Chicken Alfredo</p>
                            <p className="text-sm mt-1">Table #10</p>
                        </li>
                        <li className="py-3 px-4">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2">
                                    <h3 className="text-lg font-medium">Order #002</h3>
                                </div>
                                <div className="col-span-1 text-right">
                                    <p className="text-sm font-medium">Ready</p>
                                </div>
                            </div>
                            <p className="text-sm mt-2">1 x Salad, 1 x Chicken Alfredo</p>
                            <p className="text-sm mt-1">Table #10</p>
                        </li>
                        <li className="py-3 px-4">
                            <div className="grid grid-cols-3">
                                <div className="col-span-2">
                                    <h3 className="text-lg font-medium">Order #002</h3>
                                </div>
                                <div className="col-span-1 text-right">
                                    <p className="text-sm font-medium">Ready</p>
                                </div>
                            </div>
                            <p className="text-sm mt-2">1 x Salad, 1 x Chicken Alfredo</p>
                            <p className="text-sm mt-1">Table #10</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-span-1">
                <div className="bg-gray-200 p-4">
                    <h3 className="text-lg font-medium">Order Details</h3>
                    <p className="text-sm mt-2">2 x Cheeseburgers</p>
                    <p className="text-sm mt-1">1 x Fries</p>
                    <p className="text-sm mt-1">1 x Coke</p>
                    <p className="text-sm font-medium mt-4">Total: $12.50</p>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                        Mark as Ready
                    </button>
                </div>
            </div>
        </div>


    )
}

export default ManageOrder



