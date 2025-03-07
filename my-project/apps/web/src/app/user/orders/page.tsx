"use client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="w-full h-[calc(100vh-3rem)] relative overflow-x-hidden overflow-y-hidden flex flex-row center ">
      <div className="h-full w-full flex flex-col items-center py-5">
        <div className=" w-[50vw] h-screen  flex flex-col  text-[#a9a9a9] gap-4 mb-5">
          <div className="top flex flex-row ">
            <ArrowLeft />
            <p>Back To Home</p>
          </div>
          <h1 className="font-bold text-xl">My Orders</h1>
          <div className="flex flex-row items-center justify-between text-bold text-[1.1rem]">
            <div className="flex flex-row items-center gap-5">
              <span>Sl no</span>
              <span>Item</span>
            </div>
            <div className="flex flex-row items-center gap-8">
              <span>Delivered On</span>
              <span>Price</span>
            </div>
          </div>
          <div className="orders flex flex-col p-3 gap-6 overflow-y-auto h-[80vh] scrollbar-hide">
            {[...Array(12)].map((_, index) => (
              <div
                key={index}
                className="order_item flex flex-row justify-between items-center"
              >
                <div className="flex flex-row gap-2 h-[3rem] items-center">
                  <span className="w-[2rem]">{index + 1}</span>
                  <div className="flex flex-row gap-2 h-full">
                    <div className="relative w-[3.5rem] h-[3.5rem] ">
                      <Image
                        src={"/images/login-pizza.jpg"}
                        alt={"/images/login-pizza.jpg"}
                        fill
                        className="rounded-xl"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-center">
                      <h1 className="font-bold">Thin Crust</h1>
                      <p className="flex flex-row text-sm">
                        <span>Large,</span>
                        <span>Pepperoni,</span>
                        <span>1 pc</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-8">
                  <div className="delivery_on">Sep 05,2024</div>
                  <div className="price">
                    <span>500</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
