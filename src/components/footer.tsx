import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Contact Us",
    items: ["admin@codelaik.com", "(732) 609-3243"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
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
