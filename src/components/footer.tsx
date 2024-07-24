"use client";
import emailjs from "emailjs-com";
import { Typography, Button, Input } from "@material-tailwind/react";
import { useState } from "react";

const LINKS = [
  {
    title: "Contact Us",
    items: ["admin@codelaik.com", "(732) 609-3243"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  const [formData, setFormdata] = useState<any>({
    email: "",
    name: "",
    message: "",
    loading: false,
    show: false,
    alertmessage: "",
    variant: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormdata({ loading: true });

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      to_name: "admin@codelaik.com",
      message: "Codelaik inquiery",
    };

    emailjs
      .send(
        "service_gicyo97",
        "template_ge6nmiw",
        templateParams,
        "2-uByNV-ZouzgtPzO"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormdata({
            loading: false,
            alertmessage: "SUCCESS! ,Thank you for your messege",
            variant: "success",
            show: true,
          });
        },
        (error) => {
          console.log(error.text);
          setFormdata({
            alertmessage: `Faild to send!,${error.text}`,
            variant: "danger",
            show: true,
          });
          document.getElementsByClassName("co_alert")[0].scrollIntoView();
        }
      );
  };

  const handleChange = (e: any) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mb-4"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                      placeholder={undefined}
                      onPointerEnterCapture={undefined}
                      onPointerLeaveCapture={undefined}
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="">
            <Typography
              variant="h6"
              className="mb-3 text-left"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Services inquiery
            </Typography>
            <Typography
              className="!text-gray-500 font-normal mb-4 text-base"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Leave your email and we'll reach out to you shortly!
            </Typography>
            <Typography
              variant="small"
              className="font-medium mb-2 text-left"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Your Email
            </Typography>
            <div className="flex mb-3 flex-col lg:flex-row items-start gap-4">
              <div className="w-full">
                {/* @ts-ignore */}
                <Input
                  label="Email"
                  name="email"
                  color="gray"
                  onChange={handleChange}
                />
                {/* <Typography
                  className="font-medium mt-3 !text-sm !text-gray-500 text-left"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  I agree to let Codelaik reach out about
                  <a
                    href="#"
                    className="font-bold underline hover:text-gray-900 transition-colors"
                  >
                    Terms and Conditions{" "}
                  </a>
                </Typography> */}
              </div>
              <Button
                color="gray"
                className="w-full lg:w-fit"
                size="md"
                onClick={handleSubmit}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>

        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          &copy; {CURRENT_YEAR}{" "}
          <a href="https://www.material-tailwind.com" target="_blank">
            CodeLaik.
          </a>{" "}
          <a href="https://www.creative-tim.com" target="_blank">
            All Rights Reserved
          </a>
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
