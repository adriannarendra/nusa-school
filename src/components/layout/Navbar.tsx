"use client";
import { useAppContext } from "@/context/AppContext";
import Icon from "../ui/users/icons";

export default function Navbar() {
  const { user } = useAppContext();

  return (
    <header className="flex justify-between items-center bg-transparent">
      <div className="flex flex-col gap-[2px]">
        <p className="text-[16px] font-normal text-gray06">Selamat datang</p>
        <h2 className="text-[20px] font-semibold text-black">Admin!</h2>
      </div>
      <div className="flex items-center gap-[16px]">
        <div className="flex align-center justify-center w-[44px] h-[44px] rounded-[12px] border-[1px] border-gray02 bg-white">
          <Icon name="notification" className="w-[24px] stroke-primary" strokeWidth="2px" />
        </div>
        <img className="w-[44px] h-[44px] rounded-[12px]" src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_16x9.jpg?w=1200" alt="profile-picture" />
      </div>
    </header>
  );
}
