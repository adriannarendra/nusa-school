"use client";
import { useState } from "react";
import menus from "./menuConfig";
import SidebarGroup from "./SidebarGroup";
import { PanelLeftClose } from "lucide-react";

export default function Sidebar() {
  console.log(menus)

  return (
    <aside className="w-[320px] h-screen fixed top-0 left-0 flex flex-col bg-white border-r-[1px] border-gray01 py-[32px] gap-[32px] overflow-y-auto hide-scrollbar">
      {/* Logo */}
      <div className="felx flex-row justify-between px-[20px]">
        {/* Logo pakai PNG */}
        <img className="w-[117px]" src="/nusa-logo1x.svg" alt="damn" />
      </div>


      {/* Menu */}
      <nav className="flex flex-col gap-[20px]">
        {menus.map((menu, index) => (
          <SidebarGroup
            key={index}
            name={menu.name}
            icon={<menu.icon className="w-6 h-6" />}
            path={menu.path ? menu.path : ''}
            children={menu.children}
          />
        ))}
      </nav>
    </aside>
  );
}
