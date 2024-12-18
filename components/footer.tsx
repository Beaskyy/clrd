import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="lg:px-24 md:px-8 px-5 md:py-[30px] py-6">
      <div className="flex flex-col lg:gap-[100px] gap-16">
        <div className="flex lg:flex-row flex-col gap-12 justify-between">
          <div className="flex flex-col gap-10 max-w-[310px]">
            <Image
              src="/images/clrd.png"
              alt="logo"
              width={140}
              height={36.23}
            />
            <p className="">
              Communication House (3rd Floor) Lafiaji, Obalende, Lagos, Nigeria.
            </p>
          </div>
          <div className="flex md:flex-row flex-col lg:gap-[97px] md:gap-16 gap-8">
            <div className="flex flex-col gap-[18px]">
              <h6 className="md:text-[22px] text-lg text-[#A8A8A8] font-semibold">Page</h6>
              <div className="flex flex-col gap-[14px]">
                <Link
                  href="/"
                  className="text-[#353535] md:text-[17.23px] text-sm leading-[22.39px]"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="text-[#353535] md:text-[17.23px] text-sm leading-[22.39px]"
                >
                  Who we are
                </Link>
                <Link
                  href="/"
                  className="text-[#353535] md:text-[17.23px] text-sm leading-[22.39px]"
                >
                  What we do
                </Link>
                <Link
                  href="/"
                  className="text-[#353535] md:text-[17.23px] text-sm leading-[22.39px]"
                >
                  Our Managemet
                </Link>
                <Link
                  href="/"
                  className="text-[#353535] md:text-[17.23px] text-sm leading-[22.39px]"
                >
                  News & Events
                </Link>
                <Link
                  href="/"
                  className="text-[#353535] md:text-[17.23px] text-sm leading-[22.39px]"
                >
                  Photo Gallery
                </Link>
                <Link
                  href="/"
                  className="text-[#353535] md:text-[17.23px] text-sm leading-[22.39px]"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-[18px]">
              <h6 className="md:text-[22px] text-lg text-[#A8A8A8] font-semibold">
                License
              </h6>
              <div className="flex flex-col gap-[14px]">
                <Link
                  href="/"
                  className="text-[#353535] md:text-[17.23px] text-sm leading-[22.39px]"
                >
                  License Categories
                </Link>
                <Link
                  href="/"
                  className="text-[#353535] md:text-[17.23px] text-sm leading-[22.39px]"
                >
                  Procedure for Courier License
                </Link>
                <Link
                  href="/"
                  className="text-[#353535] md:text-[17.23px] text-sm leading-[22.39px]"
                >
                  Courier Companies
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-[18px]">
              <h6 className="md:text-[22px] text-lg text-[#A8A8A8] font-semibold">
                Contact
              </h6>
              <div className="flex flex-col gap-[14px]">
                <p className="text-[#353535] md:text-[17.23px] text-sm leading-[22.39px]">
                  Tel: +2348149322933,
                </p>
                <p className="text-[#353535] md:text-[17.23px] text-sm leading-[22.39px]">
                  +2348097136584
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col lg:items-start items-center justify-between border-t border-[#F3F3F3]">
          <p className="text-[#393938] md:text-[15.07px] text-sm py-[17px] text-center">
            © 2022 Courier & Logistics Regulatory Department, All rights
            reserved
          </p>
          <div className="flex gap-[17px] py-[17px]">
            <Link href="/" className="text-[#003232] md:text-[15.07px] text-sm">
              X (Twitter)
            </Link>
            <Link href="/" className="text-[#003232] md:text-[15.07px] text-sm">
              Instagram
            </Link>
            <Link href="/" className="text-[#003232] md:text-[15.07px] text-sm">
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
