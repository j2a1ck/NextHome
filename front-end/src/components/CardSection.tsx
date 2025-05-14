"use client";
import Image from "next/image";
import CardButton from "./CardButton";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Card {
  name: string;
  image: string;
  type: string;
  buttons: string[];
  description: string;
  description2: string;
}

const CardSection = () => {
  const [cards, setCards] = useState<Card[]>([]);
  useEffect(() => {
    fetch("/data/text.json")
      .then((response) => response.json())
      .then((json) => setCards(json.cards))
      .catch((error) => console.error("Error fetching card data:", error));
  }, []);
  return (
    <section>
      <div className="mb-[15px] flex justify-center md:mb-[35px] md:text-2xl lg:text-3xl lg:font-semibold">
        بهترین روش رو برای خودت انتخاب کن
      </div>
      <div className="mb-[20px] lg:grid lg:grid-cols-3">
        {cards.map((card: Card, index: number) => {
          return (
            <Link href={`/post/${card.name}`} key={index}>
              <article key={index} className="mt-[20px] flex justify-center">
                <div className="mx-[40px] h-[460px] rounded-md bg-[#F4F8F8] text-right md:mx-[65px] md:flex md:h-[300px] lg:block lg:h-[490px]">
                  <div className="flex justify-center">
                    <Image
                      src={card.image}
                      alt="people are working in pic"
                      width={400}
                      height={400}
                      className="h-auto w-auto rounded-lg bg-cover md:mr-4 md:w-[500px] lg:mr-0 lg:w-[400px] 2xl:mt-4"
                    />
                  </div>
                  <div className="mr-[10px]">
                    <div className="mb-[4px] mt-[10px] text-base font-medium">
                      {card.type}
                    </div>
                    <div className="space-x-4">
                      {card.buttons.map((button: string, index: number) => {
                        return <CardButton key={index}>{button}</CardButton>;
                      })}
                    </div>
                    <div className="mt-[20px] flex justify-end">
                      <div className="order-2 mt-[10px] flex">
                        <div className="mx-[10px] h-[5px] w-[5px] rounded-full bg-red-400"></div>
                      </div>
                      <div className="order-1 flex">{card.description}</div>
                    </div>
                    <div className="mt-[13px] flex justify-end">
                      <div className="order-2 mt-[10px] flex">
                        <div className="mx-[10px] h-[5px] w-[5px] rounded-full bg-red-400 lg:mx-[5px]"></div>
                      </div>
                      <div className="order-1 flex">{card.description2}</div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CardSection;
