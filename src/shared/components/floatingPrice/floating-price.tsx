import Link from "next/link"
import { MenuOutlined, CloseOutlined, HistoryOutlined, ShoppingOutlined } from "@ant-design/icons";
import type { MenuProps } from 'antd';
import { Dropdown } from "antd";

export const FloatingPrice = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          Your Order
        </a>
      ),
      icon: (<ShoppingOutlined />)

    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Order History
        </a>
      ),
      icon: (<HistoryOutlined />)
    }
  ];
  return (
    <div className="flex justify-center item-center fixed w-full bottom-0 shadow-lg left-0 bg-white">
      <div className="flex justify-between max-w-4xl mx-auto items-center w-full">
        <div className="flex flex-col p-3">
          <p>
            Total Item <span>(2)</span>
          </p>
          <p>Rp.155.000</p>
        </div>
        <div className="flex items-center">
          <div className="flex border-2 border-solid border-gold p-2 rounded-md">
            <Dropdown menu={{ items }} placement="top" arrow={{ pointAtCenter: true }} trigger={['click']}>
              <MenuOutlined className='text-gold' />
              {/* <CloseOutlined /> */}
            </Dropdown>
          </div>
        </div>
        <div className="flex pr-7">
          <Link href="detail-order" className="rounded-full bg-black text-white px-4 py-2">Order</Link>
        </div>
      </div>
    </div>
  )
}