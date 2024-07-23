"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: InboxIcon,
    title: "Modern Design",
    description:
      "Experience sleek, contemporary website designs that captivate users and provide an intuitive, user-friendly interface, making your brand stand out.",
  },
  {
    icon: AcademicCapIcon,
    title: "SEO Optimization",
    description:
      "Enhance your website’s visibility on search engines with our advanced SEO techniques, ensuring higher rankings and increased organic traffic.",
  },
  {
    icon: CheckBadgeIcon,
    title: "More Foot Traffic",
    description:
      "Drive more visitors to your site with targeted strategies that attract and engage your audience, ultimately boosting your online presence and conversions.",
  },
];

export function OnlineCourse() {
  return (
    <section className="py-28 px-8" id="about">
      <div className="container mx-auto grid grid-cols-1 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/online-course.png"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div>
        <div className="col-span-2 lg:pl-24">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Elevating Your Digital Presence
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            At Codelaik, our mission is to empower businesses by creating
            exceptional online experiences that drive growth and success. We are
            dedicated to delivering high-quality, customized web development
            solutions that meet your unique needs
          </Typography>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlineCourse;
