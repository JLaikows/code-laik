"use client";

import Image from "next/image";
import React from "react";
import { Typography, Carousel } from "@material-tailwind/react";

const teamList: any[] = [
  {
    name: "Joshua Laikowski",
    title: "Senior Engineer",
    description:
      "Josh is a seasoned web development expert with over 5 years of experience in crafting robust, scalable solutions. His innovative approach and meticulous attention to detail ensure every project exceeds client expectations. Passionate about technology, Joshua is dedicated to driving Codelaik's success through exceptional engineering.",
    image:
      "https://media.licdn.com/dms/image/D4D03AQHa4PZUt_hGng/profile-displayphoto-shrink_800_800/0/1707503159964?e=1722470400&v=beta&t=5A_hZyu1gIPfKGuYHcWdxXe4Gxl96n9E1VYdHqQDqP0",
    portfolio: "https://laikowski.com",
  },
  // {
  //   name: "Casey O'neil",
  //   title: "Software Engineer II",
  //   description:
  //     "Josh is a seasoned web development expert with over a 5+ of experience in crafting robust, scalable web applications. His innovative approach and meticulous attention to detail ensure every project exceeds client expectations. Passionate about technology, Joshua is dedicated to driving Codelaik's success through exceptional engineering.",
  //   image:
  //     "https://media.licdn.com/dms/image/D4D35AQGdD3vWtkKWnQ/profile-framedphoto-shrink_800_800/0/1696441245247?e=1722319200&v=beta&t=tePKNd4GUY1vpuB7YW8TGm_QlfOZRnsD9hlQkqar8vk",
  // },
];

export function CarouselFeatures() {
  return (
    <section className="px-8 pb-20">
      <div className="flex mb-16 flex-col items-center">
        <Typography
          variant="h2"
          className="text-center mb-2"
          color="blue-gray"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Meet Our Team
        </Typography>
        <Typography
          variant="lead"
          className="mb-3 w-full text-center font-normal !text-gray-500 lg:w-10/12"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Discover the engineers that put your website together
        </Typography>
      </div>
      <div className="container mx-auto !rounded-lg bg-[url('/image/Background.png')] bg-center py-10 lg:px-16">
        <Carousel
          transition={{ duration: 1 }}
          nextArrow={() => <></>}
          prevArrow={() => <></>}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute left-16 bottom-0 z-50 flex h-5 w-20 -translate-x-2/4 gap-2 md:left-2/4">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 w-10 cursor-pointer transition-all content-[''] ${
                    activeIndex === i ? "bg-white" : "bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          {teamList.map((member, i) => (
            <div
              key={i}
              className="!relative flex grid-cols-1 flex-col-reverse gap-6 px-10 py-14 md:grid md:grid-cols-5  md:gap-14 md:py-20 max-h-96 lg:overflow-hidden overflow-scroll "
            >
              <div className="col-span-3 flex flex-col items-start justify-center">
                <Typography
                  variant="small"
                  color="white"
                  className="font-medium uppercase"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {member.name},{" "}
                  <span className="font-normal opacity-60">{member.title}</span>
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-5 text-xl font-normal "
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {member.description}
                </Typography>
                {/* <Typography
                  className="hover-pointer"
                  href="https://laikowski.com"
                  target="_blank"
                  // variant="h5"
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  placeholder={undefined}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "5px",
                    border: "1px solid grey",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                  }}
                >
                  Portfolio
                </Typography> */}
              </div>
              <div className="col-span-2 flex w-full shrink-0 md:!justify-end">
                <Image
                  width={256}
                  height={256}
                  src={member.image}
                  alt="testimonial image"
                  // style={{ borderRadius: "10px" }}
                  className="h-full w-2/4 object-contain md:!w-2/3 rounded-lg"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default CarouselFeatures;
