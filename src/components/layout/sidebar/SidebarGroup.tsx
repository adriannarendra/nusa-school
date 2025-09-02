import Icon from '@/components/ui/users/icons'
import { cn } from '@/utils/cn'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import SidebarItem from './SidebarItem'
import {
    ChevronDown
} from "lucide-react";


const SidebarGroup = ({ name, icon, path, children }) => {
    const [isOpen, setIsOpen] = useState('close');

    return (
        <div className='flex flex-col gap-[8px] cursor-pointer'>
            {/* Parent with submenu */}
            <div
                onClick={() =>
                    name === 'Home' ? {} : setIsOpen((prev) => prev === 'close' ? 'open' : 'close')
                }
                className="text-primary mx-[20px] flex gap-[12px] p-[12px] text-[16px] font-semibold rounded-[8px]"
            >
                <div>
                    {icon}
                </div>
                {name}
                {name === 'Home'
                    ? null
                    :
                    <ChevronDown
                        className={cn(
                            "w-[24px] ml-auto stroke-primary chevron",
                            isOpen === 'open' && "rotate"
                        )}
                    />}
            </div>
            {path !== '/' &&
                <div className={
                    cn(
                        "flex mx-[20px] gap-[8px]",
                        isOpen === 'open' ? 'block' : 'hidden'
                    )
                }>
                    {/* Submenu */}
                    {children?.map((item) => (
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