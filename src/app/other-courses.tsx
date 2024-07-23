"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const OTHER_COURSES = [
  {
    img: "https://media.licdn.com/dms/image/D4E2DAQH0pKijXCMbcg/profile-treasury-image-shrink_800_800/0/1719363695438?e=1722322800&v=beta&t=T4tmgfDhjsUysioHeUFqocS1SlfeL0Sy-vB2GkqKy-s",
    title: "Sasha Semeniuk",
    desc: "A portfolio page for an up and coming model. Includes an admin UI to upload, delete, and edit photos in the gallery",
    buttonLabel: "See Webpage",
    link: "https://sashasemeniuk.com",
  },
  // {
  //   img: "/image/blogs/blog2.svg",
  //   title: "WebDev Pro Code-a-Thon: Build a Responsive Website",
  //   desc: "Participants will have 48 hours to create a responsive website from scratch using HTML, CSS, and JavaScript.",
  //   buttonLabel: "register for free",
  // },
  // {
  //   img: "/image/blogs/blog3.svg",
  //   title: "Ask the Experts: Frontend Web Development",
  //   desc: "Join our live Q&A session with our experienced instructors. Get answers to your queries, insights into best practices.",
  //   buttonLabel: "get ticket",
  // },
  // {
  //   img: "/image/blogs/blog4.svg",
  //   title: "Web Accessibility: Building Inclusive Websites",
  //   desc: "Industry experts will discuss the importance of inclusive design and share strategies for creating websites.",
  //   buttonLabel: "get ticket",
  // },
];

export function OtherCourses() {
  return (
    <section className="pb-20 px-8" id="portfolio">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          Previous Clients
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          See some of our previous clients and what our work did for them, and
          could do for you too.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {OTHER_COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherCourses;
