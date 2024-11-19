"use client";
import Image from "next/image";
import text from "../../public/data/text.json";
import CardButton from "./CardButton";
import { useEffect } from "react";
const CardSection = () => {
  const { cards } = text;

  useEffect(() => {
    fetch("/data/text.json").then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
  }, []);
  return (
    <div>
      <div className="mb-[15px] flex justify-center lg:mb-[35px] lg:text-3xl lg:font-semibold">
        بهترین روش رو برای خودت انتخاب کن
      </div>
      <div className="lg:grid lg:grid-cols-3 mb-[20px]">
        {cards.map((card, index) => {
          return (
            <div key={index} className="mt-[20px] flex justify-center">
              <div className="mx-[40px] h-[420px] w-full rounded-md bg-[#F4F8F8] text-right lg:h-[470px]">
                <div className="flex justify-center">
                  <Image
                    src={card.image}
                    alt="people are working in pic"
                    width={100}
                    height={100}
                    className="mt-[10px] w-full lg:w-[400px]"
                  />
                </div>
                <div className="mr-[10px]">
                  <div className="mb-[4px] mt-[10px] text-base font-medium">
                    {card.type}
                  </div>
                  <div className="space-x-4">
                    {card.buttons.map((button, index) => {
                      return <CardButton key={index}>{button}</CardButton>;
                    })}
                  </div>
                  <div className="mt-[20px] flex">
                    <div className="order-2 mt-[10px] flex">
                      <div className="mx-[10px] h-[5px] w-[5px] rounded-full bg-red-400"></div>
                    </div>
                    <div className="order-1 flex">{card.description}</div>
                  </div>
                  <div className="mt-[20px] justify-end flex">
                    <div className="order-2 mt-[10px] flex">
                      <div className="mx-[10px] lg:mx-[5px] h-[5px] w-[5px] rounded-full bg-red-400"></div>
                    </div>
                    <div className="order-1 flex">{card.description2}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardSection;
