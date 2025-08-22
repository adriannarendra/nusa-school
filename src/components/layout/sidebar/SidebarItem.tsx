import { cn } from '@/utils/cn'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type SidebarItemProps = {
    name: string,
    path: string,
}

const SidebarItem = ({ name, path }: SidebarItemProps) => {
    const pathName = usePathname();

    return (
        <Link
            href={path}
            className={cn(
                "flex p-[12px] pl-[48px] text-[16px] rounded-[8px] text-primary font-semibold",
                pathName === path && "bg-blue01"
            )}
        >
            <p className={cn(
                "text-black font-normal hover:text-primary smooth-transition",
                pathName === path && "text-primary font-semibold"
            )}
            >{name}</p>
        </Link >
    )
}

export default SidebarItem