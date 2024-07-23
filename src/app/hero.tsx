"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div
      className="relative min-h-screen w-full bg-[url('/image/course.png')] bg-cover bg-no-repeat"
      id="home"
    >
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography
            variant="h1"
            color="white"
            className="md:max-w-full lg:max-w-3xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Professional Web Development Services
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Transform your online presence with Codelaik's expert web
            development services. Our team specializes in creating custom,
            responsive websites tailored to your business needs. From e-commerce
            solutions to SEO optimization, we deliver innovative and
            high-performing applications to bring your business to the next
            level.
          </Typography>
          <div>
            <Button
              variant="gradient"
              color="white"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
