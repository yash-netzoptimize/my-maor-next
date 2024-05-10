"use client";
import Link from "next/link";
import React, { useTransition } from "react";
import userIcon from "../../../public/images/user.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import maorLogo from "../../../public/images/logotype-maor.png";
import dropDownArrow from "../../../public/svgs/arrow-dropdown.svg";

const Header = () => {
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const navbar = [
    {
      title: "Home",
      class: "",
      link: "/home",
    },
    {
      title: "My Maor",
      class: "",
      link: "/my-maor",
    },
    {
      title: "Library",
      class: "",
      link: "/library",
    },
    {
      title: "Daily Rebbe Video",
      class: "",
      link: "/daily-rebbe-video",
    },
    {
      title: "Illuminate",
      class: "",
      link: "/illuminate",
    },
    {
      title: "Maor Partners",
      class: "",
      link: "/partners/main/home",
    },
    {
      title: "Refer a Friend",
      class: "",
      link: "/share",
    },
    {
      title: "Store",
      class: "",
    },
  ];

  return (
    <div className="relative border-b border-[#27305a]">
      <div className="bg-[#f6f6f6] flex justify-between pl-[48px] pr-[48px] pt-[4px] pb-[4px] items-center">
        <div className="min-w-[200px]">
          <div className="w-[84px] h-[64px]">
            <Image src={maorLogo} />
          </div>
        </div>
        <div className="flex items-center grow">
          <nav className="ml-auto">
            <ul className="flex gap-[20px]">
              {navbar.map((item) => {
                console.log(pathname, "pathname");
                const isActive = pathname === item.link;
                return (
                  item.link && (
                    <li
                      key={item.title}
                      className={`relative text-[#27305a] hover:text-[#ff8a34] font-bold text-base leading-6 ${
                        isActive && `text-[#ff8a34]`
                      }`}
                    >
                      {isActive && (
                        <div class="absolute top-full mt-1 w-full h-1 bg-orange-500 rounded-md"></div>
                      )}
                      <Link
                        href={item.link}
                        onClick={() => {
                          startTransition(() => {
                            router.push(item.link);
                          });
                        }}
                      >
                        {item.title}
                      </Link>
                    </li>
                  )
                );
              })}
            </ul>
          </nav>
          <div className="flex jc-end ml-auto md:min-w-32">
            <div className="flex items-center cursor-pointer">
              <div className="flex items-center gap-[10px]">
                <div className="w-[40px] h-[40px] bg-cover bg-no-repeat rounded-full">
                  <Image src={userIcon} />
                </div>
                <div className="font-[400] ">
                  <p className="text-xs">
                    Welcome <br />
                    <strong> Kumar </strong>Family
                  </p>
                  <span className="text-[10px] text-gray-500 font-extrabold text-center block flex items-center justify-center gap-[3px]">
                    Account
                    <div className="w-[16px] h-[16px]">
                      <Image src={dropDownArrow} />
                    </div>
                  </span>
                </div>
                <div className="text-base leading-5  text-[#ff8a34] underline">
                  <Link href="#">
                    Become <br /> Partner
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
