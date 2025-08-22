"use client";
import { useState } from "react";
import { MenuPath, menus } from "./menuConfig";
import SidebarGroup from "./SidebarGroup";

export default function Sidebar() {
  return (
    <aside className="w-[320px] h-screen fixed top-0 left-0 flex flex-col bg-white border-r-[1px] border-gray01 py-[32px] gap-[32px] overflow-y-auto hide-scrollbar">
      <div className="px-[20px]">
        <img className="w-[117px]" src="/nusa-logo1x.svg" alt="damn" />
        {/* <h1 className="text-xl font-bold">Nusa School</h1> */}
      </div>
      <nav className="flex flex-col gap-[20px]">
        {menus.map((menu) => (
          <SidebarGroup 
            key={menu.path}
            menu={menu}
          />
        ))}
      </nav>
    </aside>
  );
}
