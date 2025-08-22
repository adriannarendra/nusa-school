import Icon from '@/components/ui/users/icons'
import { cn } from '@/utils/cn'
import React, { useState } from 'react'
import { MenuConfig, MenuPath } from './menuConfig'
import { usePathname } from 'next/navigation'
import SidebarItem from './SidebarItem'

interface SidebarProps {
    menu: MenuConfig
}

type dropdownType = 'open' | 'close';

const SidebarGroup = ({ menu }: SidebarProps) => {
    const [isOpen, setIsOpen] = useState<dropdownType>('close');

    // const dropdownToggle = () => {
    //     setDropdown([item.path] === 'arrowUp' ? true : false)
    // }

    return (
        <div className='flex flex-col gap-[8px] cursor-pointer'>
            <div
                onClick={() =>
                    setIsOpen((prev) => prev === 'close' ? 'open' : 'close')
                }
                className="text-primary mx-[20px] flex gap-[12px] p-[12px] text-[16px] font-semibold rounded-[8px]"
            >
                <div>
                    <Icon {...menu.icon} />
                </div>
                {menu.name}
                {menu.name === 'Collapse'
                    ? null
                    :
                    <Icon
                        name='arrowDown'
                        className={cn(
                            "w-[24px] ml-auto stroke-primary chevron",
                            isOpen === 'open' && "rotate"
                        )}
                    />}
            </div>
            {menu.path !== '/' &&
                <div className={
                    cn(
                        "flex mx-[20px] gap-[8px]",
                        isOpen === 'open' ? 'block' : 'hidden'
                    )
                }>
                    {menu.children?.map((item) => (
                        <SidebarItem
                            key={item.path}
                            name={item.name}
                            path={item.path}
                        />
                    ))
                    }
                </div >
            }
        </div>
    )
}

export default SidebarGroup