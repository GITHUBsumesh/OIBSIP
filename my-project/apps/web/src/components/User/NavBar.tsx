"use client";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Heart, ShoppingBasket } from "lucide-react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useSidebar } from "../ui/sidebar";
import { useProfile } from "@/hooks/useAuth";
import Link from "next/link";
interface NavBarProps {
  title: string;
  icon: React.ReactNode;
  isAdmin?: boolean;
}
const NavBar = ({ title, icon, isAdmin = false }: NavBarProps) => {
  const { toggleSidebar } = useSidebar();
  const {data:profile} = useProfile()
  return (
    <div className="bg-components min-h-12 max-h-12 flex flex-row items-center justify-between pl-8 pr-10 min-w-screen max-w-screen">
      <div className="left ">
        <h1 className="flex flex-row items-center gap-2 font-bold">
          <span className="yellow w-10 h-7 center flex-row">
            {/* <Pizza className="rotate-90 w-4 h-4" /> */}
            <div>{icon}</div>
          </span>
          {title}{" "}
        </h1>
      </div>
      <div className="right">
        <ul className="flex flex-row items-center gap-8">
          {!isAdmin ? (
            <div className="flex flex-row items-center gap-8">
              {/* <li className="mt-1">
                <TooltipProvider>
                  <Tooltip className="bg-component">
                    <TooltipTrigger>
                      <Heart />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Favorites</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li> */}
              <li className="mt-1">
                <TooltipProvider>
                  <Tooltip className="bg-component">
                    <TooltipTrigger>
                      <Link href='/user/cart'><ShoppingBasket /></Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Cart</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            </div>
          ) : (
            ""
          )}
          <button onClick={toggleSidebar}>
            <li>
              <Avatar>
                <AvatarImage
                  src={profile?.profilePic || `images/default.jpg`}
                  alt={`profile`}
                />
                <AvatarFallback>{profile?.firstName[0]}</AvatarFallback>
              </Avatar>
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
